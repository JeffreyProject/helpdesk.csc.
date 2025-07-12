import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - ICT Inventory',
  description: 'Login to your ICT Inventory account',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Remove <html> and <body> here!
    <>
      {children}
    </>
  );
}
