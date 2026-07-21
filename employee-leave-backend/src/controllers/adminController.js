import Leave from "../models/Leave.js";
import Employee from "../models/Employee.js";

export const getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find()
      .populate("employee", "name employeeId department designation")
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: leaves.length,
      leaves,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const approveLeave = async (req, res) => {
  try {
    const { leaveId } = req.params;

    const leave = await Leave.findById(leaveId);

    if (!leave) {
      return res.status(404).json({
        success: false,
        message: "Leave request not found.",
      });
    }

    if (leave.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message: "This leave request has already been processed.",
      });
    }

    const employee = await Employee.findById(leave.employee);
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found.",
      });
    }

    const leaveTypeMap = {
      Casual: "casual",
      Medical: "medical",
      Earned: "earned",
      Maternity: "maternity"
    };
    const balanceKey = leaveTypeMap[leave.leaveType];

    if (!balanceKey) {
      return res.status(400).json({
        success: false,
        message: "Invalid leave type.",
      });
    }

    if (employee.leaveBalance[balanceKey] < leave.numberOfDays) {
      return res.status(400).json({
        success: false,
        message: "Insufficient leave balance.",
      });
    }

    employee.leaveBalance[balanceKey] -= leave.numberOfDays;

    await employee.save();

    leave.status = "Approved";
    leave.approvedBy = req.user.id;

    await leave.save();

    return res.status(200).json({
      success: true,
      message: "Leave approved successfully.",
      leave,
    });

    return res.status(200).json({
      success: true,
      message: "Leave approved successfully.",
      leave,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
