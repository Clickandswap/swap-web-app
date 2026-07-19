import Button from '@/components/ui/Button';
import React from 'react'

function WorkWithUs() {
  return (
    <main className="bg-light md:px-30 px-6 py-18 text-center text-dark">
      <div className="bg-[#EEF9FF] px-10 py-16  rounded-xl">
        <h2 className="md:text-5xl text-2xl font-semibold font-space_grotesk">Work with us</h2>

        <p className="text-foundation_blue my-6 text-center">JPartnerships, press, or careers — we’d love to <br /> hear from you.</p>
        <Button
          className="rounded-full p-px my-4 bg-primary"
        >
          <div className="rounded-full px-8 py-2 text-sm text-dark">
            Get in touch
          </div>
        </Button>
      </div>
    </main>
  )
}

export default WorkWithUs;