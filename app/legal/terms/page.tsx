export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-serif font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-lg text-gray-700">
        <p>
          Welcome to David&apos;s Notes. By accessing or using our website, you agree to be bound by these Terms of Service.
        </p>

        <h3>1. Intellectual Property</h3>
        <p>
          All content published on this website, including but not limited to text, images, graphics, and logos, is the property of David Kim and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
        </p>

        <h3>2. Use of Content</h3>
        <p>
          The content provided on David&apos;s Notes is for informational and educational purposes only. It does not constitute professional financial, legal, or investment advice. We are not responsible for any decisions made based on the information provided here.
        </p>

        <h3>3. User Conduct</h3>
        <p>
          You agree to use our website only for lawful purposes. You must not use our site to transmit any malicious code, spam, or engage in any activity that disrupts the site's functionality.
        </p>

        <h3>4. Disclaimer of Warranties</h3>
        <p>
          This website is provided "as is" without any warranties, express or implied. We do not guarantee that the site will be error-free, secure, or uninterrupted.
        </p>

        <h3>5. Changes to Terms</h3>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the website after any changes constitutes your acceptance of the new terms.
        </p>

        <h3>6. Contact</h3>
        <p>
          For any inquiries regarding these terms, please contact: <a href="mailto:contact@economist-david.com" className="text-primary underline">contact@economist-david.com</a>
        </p>
      </div>
    </div>
  );
}
