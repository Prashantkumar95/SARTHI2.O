// // import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// // import "./globals.css";
// // import StoreProvider from "@/redux/StoreProvider";
// // import InitUser from "@/initUser";
// // import Provider from "@/Provider";
// // import "leaflet/dist/leaflet.css";

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// // export const metadata: Metadata = {
// //   title: "SARTHI - Complete Travel Companion",
// //   description: "sarthi ek modern multi-vendor vehicle booking platform hai jahan users aasaani se cars, bikes aur commercial vehicles book kar sakte hain. Secure login, verified owners aur transparent pricing ke saath Sarthi mobility ko simple aur reliable banata hai.",
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body
// //         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white w-full min-h-screen`}
// //       >
// // <Provider>
// //         <StoreProvider>
// //           <InitUser/>
// //         {children}
// //         </StoreProvider>
// //         </Provider>
// //       </body>
// //     </html>
// //   );
// // }

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import StoreProvider from "@/redux/StoreProvider";
// import InitUser from "@/initUser";
// import Provider from "@/Provider";
// import "leaflet/dist/leaflet.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "SARTHI - Complete Travel Companion",
//   description:
//     "Sarthi ek modern multi-vendor vehicle booking platform hai jahan users aasaani se cars, bikes aur commercial vehicles book kar sakte hain.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen w-full`}
//       >
//         {/* AUTH / NEXTAUTH PROVIDER */}
//         <Provider>
//           {/* REDUX STORE */}
//           <StoreProvider>
//             {/* INIT USER ON LOAD */}
//             <InitUser />
          
//             {/* PAGE CONTENT */}
//             {children}
//           </StoreProvider>
//         </Provider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
import InitUser from "@/initUser";
import Provider from "@/Provider";
import "leaflet/dist/leaflet.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SARTHI - Complete Travel Companion",
  description:
    "Sarthi ek modern multi-vendor vehicle booking platform hai jahan users aasaani se cars, bikes aur commercial vehicles book kar sakte hain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen w-full`}
      >
        <Provider>
          <StoreProvider>
            <InitUser />

            {children}
          </StoreProvider>
        </Provider>
      </body>
    </html>
  );
}
