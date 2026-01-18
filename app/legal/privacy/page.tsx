export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-lg text-gray-700">
        <p>
          David&apos;s Notes (hereinafter referred to as "we", "us", or "our") values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website (davidsnote.com) or subscribe to our newsletter.
        </p>

        <h3>1. Information We Collect</h3>
        <p>We collect minimal information necessary to provide our services:</p>
        <ul>
          <li><strong>Email Address:</strong> When you subscribe to our newsletter.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our website (e.g., pages visited, time spent), collected via cookies or analytics tools.</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>To send you newsletters, updates, and relevant content.</li>
          <li>To analyze website traffic and improve user experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h3>3. Data Protection</h3>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We do not sell your personal information to third parties.
        </p>

        <h3>4. Your Rights</h3>
        <p>
          You have the right to access, correct, or delete your personal information. You can unsubscribe from our newsletter at any time by clicking the "Unsubscribe" link in the email or contacting us directly.
        </p>

        <h3>5. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:contact@economist-david.com" className="text-primary underline">contact@economist-david.com</a>
        </p>
      </div>
    </div>
  );
}
