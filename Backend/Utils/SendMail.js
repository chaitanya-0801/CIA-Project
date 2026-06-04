import transporter from "../Config/Nodemailer.js";

const sendMail = async (to, subject, html) => {
    try {
        const mailOptions = {
            from: `Chaudhary Immigration Academy <${process.env.SMTP_USER}>`,
            to,
            subject,
            html,
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(`Error sending email to ${to}:`, error);
    }
};
export default sendMail;
