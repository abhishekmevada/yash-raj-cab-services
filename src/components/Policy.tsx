import "./Policy.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Policy() {
  return (
    <>
      <Navbar />
      <div className="policyContainer">
        <h2>Privacy Policy</h2>
        <p>
          <strong>Effective Date: 3 October 2025 </strong>
          <br />
          At Yashraj Taxi, we respect your privacy and are committed to
          protecting the personal information you share with us. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you use our website and services. By using our website, you agree
          to the terms of this Privacy Policy. <br />
          <br />
          1. Information We Collect We collect limited personal information when
          you submit an inquiry through our website, including: Phone number
          Pickup location Drop location Type of car requested This information
          is collected only to respond to your taxi booking inquiry. <br />
          <br />
          2. How We Use Your Information The information collected is used to:
          Contact you regarding your taxi inquiry Provide taxi service details
          and availability Communicate via phone call or WhatsApp Send
          promotional messages or advertisements related to our taxi services.{" "}
          <br />
          <br />
          3. WhatsApp Communication When you submit an inquiry on our website,
          your request is sent directly to the owner’s personal WhatsApp number.
          By submitting the form, you consent to being contacted via WhatsApp or
          phone call. <br />
          <br />
          4. Sharing of Information We do not sell, rent, or trade your personal
          information Your information is not shared with third parties Data is
          used only for internal business communication .<br />
          <br />
          5. Payments We do not accept any payments through the website. All
          payments, if any, are handled offline and are outside the scope of
          this website. <br />
          <br />
          6. Data Security We take reasonable measures to protect your
          information. However, no online method of transmission is 100% secure,
          and we cannot guarantee absolute security of your data. <br />
          <br />
          7. Cookies & Tracking Our website does not knowingly use cookies or
          tracking tools to collect personal data. <br />
          <br />
          8. Marketing & Promotions By sharing your contact details, you agree
          that Yashraj Taxi may send: Promotional WhatsApp messages
          Service-related calls or messages You may opt out of promotional
          communication at any time by contacting us.
          <br />
          <br />
          9. User Responsibility You agree to provide accurate information while
          submitting inquiries. Misuse of the website or providing false details
          may result in refusal of service. <br />
          <br />
          10. Governing Law & Jurisdiction This Privacy Policy is governed by
          the laws of India. Any disputes shall be subject to the jurisdiction
          of the courts of Rajkot, Gujarat.
          <br />
          <br />
          11. Updates to This Policy We may update this Privacy Policy from time
          to time. Any changes will be posted on this page with a revised
          effective date. <br />
          <br />
          12. Contact Information If you have any questions about this Privacy
          Policy, you may contact us at:
        </p>
        <h3>Yashraj Taxi</h3>
        <div className="polyBox">
          <p>
            Service Area:{" "}
            <a
              href="https://maps.app.goo.gl/1n4rBfduw9AKAtbs7"
              className="polyLink"
            >
              Kothariya Chowkdi, Khokhdadi River, Rajkot, India
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="" className="polyLink">
              Bhojakvanraj111@gmail.com Phone: +91 77779 14231
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="" className="polyLink">
              +91 77779 14231
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
