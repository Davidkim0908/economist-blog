export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-serif font-bold mb-8">Cookie Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-lg text-gray-700">
        <p>
          This Cookie Policy explains how David&apos;s Notes uses cookies and similar technologies to recognize you when you visit our website.
        </p>

        <h3>1. What are Cookies?</h3>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide reporting information.
        </p>

        <h3>2. Why We Use Cookies</h3>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website (e.g., Google Analytics) so we can improve our content.</li>
          <li><strong>Functionality Cookies:</strong> To remember your preferences and settings.</li>
        </ul>

        <h3>3. Managing Cookies</h3>
        <p>
          You have the right to accept or reject cookies. You can set your browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality may be restricted.
        </p>

        <h3>4. Updates to this Policy</h3>
        <p>
          We may update this Cookie Policy from time to time. Please revisit this page periodically to stay informed about our use of cookies.
        </p>
      </div>
    </div>
  );
}
