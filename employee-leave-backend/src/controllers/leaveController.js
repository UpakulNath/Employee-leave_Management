import Leave from "../models/Leave.js";
import Employee from "../models/Employee.js";

export const applyLeave = async (req, res) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;
    const employeeId = req.user.id;
    if (!leaveType || !startDate || !endDate || !reason) {
      return res.status(400).json({
        success: false,

        message: "All fields are required.",
      });
    }

    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({
        success: false,

        message: "Employee not found.",
      });
    }

    const start = new Date(startDate);

    const end = new Date(endDate);

    const numberOfDays = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return res.status(400).json({
        success: false,
        message: "Invalid date format."
    });
}

    const leaveMap = {
      Casual: "casual",

      Medical: "medical",

      Earned: "earned",
    };

    const balanceType = leaveMap[leaveType];
    if (!balanceType) {
    return res.status(400).json({
    success: false,
    message: "Invalid leave type."
});
}

    if (employee.leaveBalance[balanceType] < numberOfDays) {
      return res.status(400).json({
        success: false,

        message: "Insufficient leave balance.",
      });
    }

    const leave = new Leave({
      employee: employeeId,

      leaveType,

      startDate,

      endDate,

      numberOfDays,

      reason,
    });
    await leave.save();

    return res.status(201).json({
      success: true,

      message: "Leave applied successfully.",

      leave,
    });
  } catch (error) {
    return res.status(500).json({
    success: false,
    message: "Server Error",
    error: error.message
});
  }
};

export const getMyLeaves = async (req, res) => {
    try {
        const employeeId = req.user.id

        const leaves = await Leave.find({
            employee: employeeId
        }).sort({
            createdAt : -1
        })

        return res.status(200).json(
            {
                success: true,
                count : leaves.length,
                 leaves
            }
        )
    } catch (error) {
        return res.status(500).json({
    success: false,
    message: "Server Error",
    error: error.message
});
    }
}
