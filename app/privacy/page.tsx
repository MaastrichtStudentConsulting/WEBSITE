import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy of Maastricht Student Consulting.',
};

export default function PrivacyPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">Privacy Policy</h1>
        <div className="section-divider mb-6" />
        <p className="text-navy/60 mb-12">As of: 09.04.2026</p>

        <div className="space-y-6 text-navy/80 leading-relaxed">
          <p>
            We are very delighted that you have shown interest in our organisation. Data protection is of a particularly high priority for the management of Maastricht Student Consulting. The use of our website is generally possible without providing any personal data. If processing of personal data is necessary and there is no statutory basis for such processing, we generally obtain consent from the data subject.
          </p>
          <p>
            The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall always be in line with the General Data Protection Regulation (GDPR), and in accordance with the country-specific data protection regulations applicable to us. By means of this data protection declaration, we would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data protection declaration, of the rights to which they are entitled.
          </p>
          <p>
            As the controller, we have implemented numerous technical and organisational measures to ensure the most complete protection of personal data processed through this website. However, Internet-based data transmissions may in principle have security gaps, so absolute protection may not be guaranteed.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-6">Name and Address of the Controller</h2>
          <p>
            Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws applicable in Member states of the European Union and other provisions related to data protection is:
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
            <p className="font-bold text-navy">Maastricht Student Consulting</p>
            <p>Niklas Ullrich</p>
            <p>Sint Antoniuslaan 61</p>
            <p>6221 XJ Maastricht</p>
            <p>Netherlands</p>
            <p className="mt-2"><strong>Phone:</strong> +49 1573 0686972</p>
            <p>
              <strong>E-Mail:</strong>{' '}
              <a href="mailto:info@maastrichtconsulting.com" className="text-orange hover:underline">
                info@maastrichtconsulting.com
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-navy pt-6">Collection of General Data and Information</h2>
          <p>
            Our website collects a series of general data and information when a data subject or automated system calls up the website. This general data and information are stored in the server log files. Collected may be (1) the browser types and versions used, (2) the operating system used by the accessing system, (3) the website from which an accessing system reaches our website (so-called referrers), (4) the sub-websites, (5) the date and time of access to the Internet site, (6) an Internet protocol address (IP address), (7) the Internet service provider of the accessing system, and (8) any other similar data and information that may be used in the event of attacks on our information technology systems.
          </p>
          <p>
            When using these general data and information, we do not draw any conclusions about the data subject. Rather, this information is needed to (1) deliver the content of our website correctly, (2) optimise the content of our website, (3) ensure the long-term viability of our information technology systems and website technology, and (4) provide law enforcement authorities with the information necessary for criminal prosecution in case of a cyber-attack. The anonymous data of the server log files are stored separately from all personal data provided by a data subject.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-6">Contact via the Website</h2>
          <p>
            Our website contains information that enables a quick electronic contact to our organisation, including a general e-mail address. If a data subject contacts us by e-mail, the personal data transmitted by the data subject are automatically stored. Such personal data transmitted on a voluntary basis by a data subject to us are stored for the purpose of processing or contacting the data subject. There is no transfer of this personal data to third parties.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-6">External Services</h2>

          <h3 className="text-xl font-bold text-navy pt-2">Vercel (Hosting)</h3>
          <p>
            Our website is hosted on Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA). When you visit our website, Vercel may process your IP address and other technical data to deliver the website to you. For more information, see{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
              Vercel&apos;s Privacy Policy
            </a>.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">HubSpot (Talent Pool Form)</h3>
          <p>
            We use HubSpot (HubSpot Inc., 25 First Street, Cambridge, MA 02141, USA) for our Talent Pool sign-up form. When you submit data through this form, it is processed by HubSpot on our behalf. The data you provide (such as your name and e-mail address) is used solely for the purpose of contacting you about future opportunities at Maastricht Student Consulting. For more information, see{' '}
            <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
              HubSpot&apos;s Privacy Policy
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-6">Cookies</h2>
          <p>
            Our website uses only technically necessary cookies that are essential for the functioning of the website. These cookies do not track your behaviour and do not collect personal data for marketing purposes. No consent is required for these cookies under applicable law.
          </p>
          <p>
            We do not use any analytics, advertising, or third-party tracking cookies on this website.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-6">Photos of Team Members</h2>
          <p>
            Our website displays photographs of our board members and consultants. All individuals depicted have given their explicit consent for the publication of their photographs on this website. Any team member may withdraw their consent at any time by contacting us, after which their photograph will be promptly removed.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-6">Rights of the Data Subject</h2>
          <p>Under the GDPR, you have the following rights regarding your personal data:</p>

          <h3 className="text-xl font-bold text-navy pt-2">a) Right of confirmation and access</h3>
          <p>
            You have the right to obtain confirmation as to whether personal data concerning you are being processed, and if so, to access that data and receive information about the purposes, categories, recipients, storage period, and your rights.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">b) Right to rectification</h3>
          <p>
            You have the right to obtain the rectification of inaccurate personal data concerning you without undue delay, and to have incomplete personal data completed.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">c) Right to erasure</h3>
          <p>
            You have the right to obtain the erasure of personal data concerning you without undue delay where one of the grounds provided by the GDPR applies, such as when the data is no longer necessary for the purposes for which it was collected, or when you withdraw your consent.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">d) Right to restriction of processing</h3>
          <p>
            You have the right to obtain restriction of processing where the accuracy of the data is contested, the processing is unlawful, the controller no longer needs the data, or you have objected to processing pending verification.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">e) Right to data portability</h3>
          <p>
            You have the right to receive the personal data concerning you in a structured, commonly used and machine-readable format, and to transmit that data to another controller.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">f) Right to object</h3>
          <p>
            You have the right to object, on grounds relating to your particular situation, at any time to processing of personal data concerning you. We shall no longer process the personal data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">g) Right to withdraw consent</h3>
          <p>
            You have the right to withdraw your consent to the processing of your personal data at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal.
          </p>

          <p className="pt-4">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:info@maastrichtconsulting.com" className="text-orange hover:underline">
              info@maastrichtconsulting.com
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-6">Legal Basis for Processing</h2>
          <p>
            Art. 6(1) lit. a GDPR serves as the legal basis for processing operations for which we obtain consent. If processing of personal data is necessary for the performance of a contract (Art. 6(1) lit. b GDPR), a legal obligation (Art. 6(1) lit. c GDPR), or our legitimate interests (Art. 6(1) lit. f GDPR) such as the proper operation of our website, the respective provision applies. Our legitimate interest is to carry out our activities in favour of the well-being of our organisation and its members.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-6">Storage Period</h2>
          <p>
            The criteria used to determine the period of storage of personal data is the respective statutory retention period. After expiration of that period, the corresponding data is routinely deleted, as long as it is no longer necessary for the fulfilment of a contract or the initiation of a contract.
          </p>

          <h2 className="text-2xl font-bold text-navy pt-6">Automated Decision-Making</h2>
          <p>
            As a responsible organisation, we do not use automatic decision-making or profiling.
          </p>
        </div>
      </div>
    </section>
  );
}
