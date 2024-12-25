import React from 'react'
import "./Disclaimer.css";

const DisclaimerImgContent = ({src,content}) => {
    return (
        <div className="disclaimer-img-content">
            <img src={src} />
            <p>{content}</p>
        </div>
    )
}

const Disclaimer = () => {
    return (
        <div className="disclaimer-container">
            <h1>Disclaimer:</h1>
            <p>The contents here is for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Medkart on any information and subsequent action or inaction is solely at the user's risk, and we do not assume any responsibility for the same. The content on the Platform should not be considered or used as a substitute for professional and qualified medical advice. Please consult your doctor for any query pertaining to medicines, tests and/or diseases, as we support, and do not replace the doctor- patient relationship.</p>
            <div className="disclaimer-bottom-card">
                <DisclaimerImgContent src="https://media.istockphoto.com/id/1365553267/vector/online-payment-security-transaction-mobile-banking-and-internet-banking-concept-vector.jpg?s=612x612&w=0&k=20&c=PyU8dVlDBqETmBmXK1W_vqBLWr5Jd-4XMVWZ1FLO4No=" content="Safe and Secured Payment" />
                <DisclaimerImgContent src="https://img.freepik.com/free-vector/3d-style-safety-shield-logo-with-checkmark-sign-safe-access_1017-51232.jpg" content="100% Authentic Products" />
                <DisclaimerImgContent src="https://static.vecteezy.com/system/resources/previews/017/441/736/non_2x/reputation-icon-thumbs-up-and-rays-customer-review-icon-quality-evaluation-feedback-isolated-illustration-vector.jpg" content="6 lac + Happy Customers" />
            </div>
        </div>
    )
}

export default Disclaimer