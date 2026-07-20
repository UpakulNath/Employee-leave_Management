import Leave from "../models/Leave.js"

export const getAllLeaves = async (req, res) => { 
    try {
        const leaves = await Leave.find().populate("employee",
        "name employeeId department designation").sort({
            createdAt : -1
        })

        return res.status(200).json({
            success: true,
            count: leaves.length,
            leaves
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        })
    }

}