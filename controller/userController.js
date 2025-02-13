import Portfolio from '../models/contactSchema.js'

export const sendMessage = async (req, res) => {
    try {
        const {name, email, subject, message} = req.body;

        const response = await Portfolio.create({name, email, subject, message});
        res.status(200).json({
            message:'Message Sent Succesfully',
            success:true,
            data:response,
        })
    } catch (error) {
        console.log(error);
    }
}