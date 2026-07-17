import Employee from "../models/Employee.js";

export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      employeeId,
      department,
      designation,
      phone,
      address,
    } = req.body;

    // Check if email already exists
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(400).json({
        success: false,
        message: "Employee already exists",
      });
    }

    // Create new employee
    const employee = new Employee({
      name,
      email,
      password,
      employeeId,
      department,
      designation,
      phone,
      address,
    });

    // Password is hashed automatically by the model
    await employee.save();

    res.status(201).json({
      success: true,
      message: "Employee registered successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};