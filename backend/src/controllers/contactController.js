import { sendEmail } from "../utils/mail.js";

export const contactController = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const info = await sendEmail({ name, email, subject, message });

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
            info,
        });

    } catch (error) {
        console.error("Error in contactController:", error);

        res.status(500).json({
            success: false,
            message: "Failed to send email",
        });
    }
};