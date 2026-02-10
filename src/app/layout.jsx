import { Geist, Geist_Mono, Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { ToastContainer } from "react-toastify";
import NextAuthProvider from "@/provider/NextAuthProvider";

export const inter = Inter({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://care-next-gray.vercel.app"),

  title: {
    default: "CareConnect | Trusted Home Care Services",
    template: "%s | CareConnect",
  },

  description:
    "CareConnect provides reliable and trusted baby care, elderly care, and sick people care services at home. Book professional caregivers easily and securely.",

  applicationName: "CareConnect",

  keywords: [
    "home care services",
    "baby care service",
    "elderly care service",
    "sick people care",
    "caregiver booking platform",
    "home nursing service",
    "babysitting service",
    "trusted caregivers",
    "healthcare at home",
    "CareConnect",
  ],

  authors: [{ name: "CareConnect Team" }],
  creator: "CareConnect",
  publisher: "CareConnect",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/assets/logo.webp",
    apple: "/assets/logo.webp",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://care-next-gray.vercel.app",
    siteName: "CareConnect",
    title: "CareConnect | Trusted Home Care Services",
    description:
      "Find and book trusted caregivers for baby care, elderly care, and sick people care at home.",
    images: [
      {
        url: "https://i.ibb.co.com/zVr1M3qs/image.png",
        width: 1200,
        height: 630,
        alt: "CareConnect Homepage Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CareConnect | Trusted Home Care Services",
    description:
      "Book professional caregivers for baby, elderly and sick people care services.",
    images: ["https://i.ibb.co.com/zVr1M3qs/image.png"],
  },

  category: "healthcare",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html suppressHydrationWarning lang="en">
        <body className={`${inter.className}  antialiased`}>
          {" "}
          <header className=" md:w-11/12 mx-auto">
            <Navbar />
          </header>
          <main className="py-3 md:w-11/12 mx-auto min-h-[calc(100vh-360px)]">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
          <ToastContainer position="top-right" autoClose={2000} />
        </body>
      </html>
    </NextAuthProvider>
  );
}
