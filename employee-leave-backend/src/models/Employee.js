import mongoose from "mongoose";
import bcrypt from "bcrypt";




const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    employeeId: {
      type: String,
      required: true,
      unique: true,
    },

    department: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    address: {
      type: String,
    },

    joiningDate: {
      type: Date,
      default: Date.now,
    },

    role: {
      type: String,
      enum: ["employee", "admin"],
      default: "employee",
    },

    profilePicture: {
      type: String,
      default: "",
    },

    leaveBalance: {
      casual: {
        type: Number,
        default: 10,
      },

      medical: {
        type: Number,
        default: 8,
      },

      earned: {
        type: Number,
        default: 15,
      },
    },
  },
  {
    timestamps: true,
  }
);

employeeSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


employeeSchema.methods.comparePassword = async function(password){
  
  return await bcrypt.compare(password,this.password);
  
}
const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;