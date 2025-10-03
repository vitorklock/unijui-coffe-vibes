"use client";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2a2222] to-[#7e6d6d]">
      <div className="bg-[#231b1b] rounded-3xl shadow-2xl w-full max-w-sm p-8 flex flex-col items-center">
        <div className="mb-10 text-center">
          <img
            src="/logo/logo.svg"
            alt="Coffee Vibes Logo"
            className="mx-auto w-32 h-auto"
            draggable={false}
          />
        </div>

        <div className="w-full border-t border-[#3a2c2c]/40 mb-8"></div>

        <h2 className="text-[#e7dacb] text-3xl font-rosarivo font-boldß text-center mb-8">
          Welcome!
        </h2>

        <div className="flex flex-col gap-6 w-full">
          <a
            href="/register"
            className="w-full bg-[#f5ede3] text-[#231b1b] font-rosario rounded-xl py-3 text-lg text-center hover:bg-[#e7dacb] transition"
          >
            CREATE ACCOUNT
          </a>
          <a
            href="/login"
            className="w-full bg-[#f5ede3] text-[#231b1b] font-rosario rounded-xl py-3 text-lg text-center hover:bg-[#e7dacb] transition"
          >
            LOGIN
          </a>
        </div>

        <div className="w-full border-t border-dashed border-[#3a2c2c]/40 mt-10"></div>
      </div>
    </div>
  );
}
