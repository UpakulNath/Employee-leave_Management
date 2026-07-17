import Employee from "../models/Employee.js";
import jwt from "jsonwebtoken";

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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find employee
    const employee = await Employee.findOne({ email });

    if (!employee) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isMatch = await employee.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: employee._id,
        role: employee.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      employee: {
        id: employee._id,
        name: employee.name,
        email: employee.email,
        role: employee.role,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};