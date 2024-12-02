import React, { lazy } from "react";

import { Helmet } from "react-helmet-async";
const Footer = lazy(() => import("../components/shared/footer"));
import Nav from "../components/shared/nav";
const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Music Through The Lens</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how we collect, use, and protect your personal information when you use our concert photography services and website."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information, concert photography"
        />
        <meta
          property="og:title"
          content="Privacy Policy | Music Through The Lens"
        />
        <meta
          property="og:description"
          content="Learn about our commitment to protecting your privacy and personal information."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/privacy-policy"
        />
        <link
          rel="canonical"
          href="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/privacy-policy"
        />
      </Helmet>
      <Nav />
      <main>
        <div className="container mx-auto px-4 py-8 pt-24">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-2">
              Welcome to our Privacy Policy. This policy describes how we
              collect, use, and protect your personal information.
            </p>
            <p>Effective Date: 10/11/2024</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside mb-2 text-white-smoke">
              <li>Personal information (e.g., name, email address)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 ">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc list-inside mb-2 text-white-smoke">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize user experience</li>
              <li>Communicate with you about our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <p className="mb-2">
              We do not sell your personal information. We may share your
              information with third-party service providers who help us operate
              our business.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc list-inside mb-2 text-white-smoke">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Security</h2>
            <p className="mb-2">
              We implement appropriate technical and organizational measures to
              protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Changes to This Policy
            </h2>
            <p className="mb-2">
              We may update this policy from time to time. We will notify you of
              any changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="mb-2">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>Email: tadc936@gmail.com</p>
            <p>Address: London</p>
          </section>
        </div>
      </main>{" "}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
