import React, { useEffect, useRef, useState } from 'react'

const useIntersectionObserver = (targetRef: React.RefObject<Element>) => {
  const [isInViewport, setIsInViewport] = useState(false)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            setIsInViewport(entry.isIntersecting)
          })
        },
        {
          threshold: 0,
        },
      )
    }

    if (targetRef.current) {
      observer.current.observe(targetRef.current)
    }

    return () => {
      observer.current?.disconnect()
    }
  }, [targetRef])

  return isInViewport
}

export default useIntersectionObserver
