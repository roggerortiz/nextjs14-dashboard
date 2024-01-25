import Breadcrumbs from '@/app/ui/breadcrumbs';
import Form from '@/app/ui/customers/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Customer',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
