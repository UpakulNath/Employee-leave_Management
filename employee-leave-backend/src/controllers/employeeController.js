import Employee from "../models/Employee.js";
import Leave from "../models/Leave.js";

export const getDashboard = async (req, res) => {
  try {
    const employee = await Employee.findById(req.user.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found.",
      });
    }

    const leaves = await Leave.find({
      employee: req.user.id,
    }).sort({
      createdAt: -1,
    });

    const totalApplied = leaves.length;

    const pending = leaves.filter(
      (leave) => leave.status === "Pending"
    ).length;

    const approved = leaves.filter(
      (leave) => leave.status === "Approved"
    ).length;

    const rejected = leaves.filter(
      (leave) => leave.status === "Rejected"
    ).length;

    return res.status(200).json({
      success: true,

      employee: {
        name: employee.name,
        employeeId: employee.employeeId,
        department: employee.department,
        designation: employee.designation,
        leaveBalance: employee.leaveBalance,
      },

      stats: {
        totalApplied,
        pending,
        approved,
        rejected,
      },

      recentLeaves: leaves.slice(0, 5),
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
