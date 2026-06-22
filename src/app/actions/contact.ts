'use server';

export type ContactState = {
  success: boolean;
  message: string;
};

export async function submitContact(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const details = formData.get('details') as string;

  if (!name || !email || !subject || !details) {
    return {
      success: false,
      message: 'All fields are required.',
    };
  }

  console.log({
    name,
    email,
    subject,
    details,
  });

  // Save to database
  // Send email
  // Trigger webhook

  return {
    success: true,
    message: 'Message submitted successfully.',
  };
}
