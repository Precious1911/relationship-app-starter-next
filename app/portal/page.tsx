export default function PortalPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl w-full space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-purple-700">Pathway Guidance Client Portal</h1>
        <p className="text-gray-600">Secure links for intake, uploads, and messages.</p>
        <div className="grid gap-3">
          <a className="rounded-xl border border-purple-500 p-4 hover:bg-purple-50" href="https://forms.hush.com/YOUR-INTAKE-FORM">Secure Intake</a>
          <a className="rounded-xl border border-purple-500 p-4 hover:bg-purple-50" href="https://forms.hush.com/YOUR-UPLOAD-FORM">Secure Uploads</a>
          <a className="rounded-xl border border-purple-500 p-4 hover:bg-purple-50" href="https://forms.hush.com/YOUR-MESSAGE-FORM">Secure Message</a>
          <a className="rounded-xl border border-purple-500 p-4 hover:bg-purple-50" href="https://upheal.com/YOUR-SESSION-LINK">Telehealth Session</a>
        </div>
      </div>
    </main>
  );
}
