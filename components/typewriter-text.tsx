'use client'

import Typewriter from 'typewriter-effect'

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  deleteSpeed?: number
}

export default function TypewriterText({
  text,
  className = '',
  speed = 50,
  deleteSpeed = 30,
}: TypewriterTextProps) {
  return (
    <div className={className}>
      <Typewriter
        options={{
          strings: [text],
          autoStart: true,
          loop: false,
          deleteSpeed: deleteSpeed,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(text).start()
        }}
      />
    </div>
  )
}
