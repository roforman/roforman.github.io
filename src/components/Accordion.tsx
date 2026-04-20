'use client'

import { useRef } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

interface Props {
  items: AccordionItem[]
  defaultOpenIndex?: number
}

export default function Accordion({ items, defaultOpenIndex = 0 }: Props) {
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const itemRefs = useRef<(HTMLDetailsElement | null)[]>([])

  const animateOpen = (item: HTMLDetailsElement, panel: HTMLDivElement) => {
    if (item.dataset.animating === 'true') return
    item.dataset.animating = 'true'
    item.open = true
    item.classList.add('is-expanded')
    panel.style.height = '0px'
    const endHeight = panel.scrollHeight
    requestAnimationFrame(() => {
      panel.style.height = `${endHeight}px`
    })
    const onEnd = (e: TransitionEvent) => {
      if (e.target !== panel || e.propertyName !== 'height') return
      panel.style.height = 'auto'
      delete item.dataset.animating
      panel.removeEventListener('transitionend', onEnd)
    }
    panel.addEventListener('transitionend', onEnd)
  }

  const animateClose = (item: HTMLDetailsElement, panel: HTMLDivElement) => {
    if (item.dataset.animating === 'true') return
    item.dataset.animating = 'true'
    panel.style.height = `${panel.scrollHeight}px`
    requestAnimationFrame(() => {
      item.classList.remove('is-expanded')
      panel.style.height = '0px'
    })
    const onEnd = (e: TransitionEvent) => {
      if (e.target !== panel || e.propertyName !== 'height') return
      item.open = false
      delete item.dataset.animating
      panel.removeEventListener('transitionend', onEnd)
    }
    panel.addEventListener('transitionend', onEnd)
  }

  const handleClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    const item = itemRefs.current[index]
    const panel = panelRefs.current[index]
    if (!item || !panel) return
    if (item.classList.contains('is-expanded')) {
      animateClose(item, panel)
    } else {
      animateOpen(item, panel)
    }
  }

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <details
          key={i}
          ref={(el) => { itemRefs.current[i] = el }}
          className={`accordion-item${i === defaultOpenIndex ? ' is-expanded' : ''}`}
          open={i === defaultOpenIndex}
        >
          <summary onClick={(e) => handleClick(e, i)}>{item.question}</summary>
          <div
            className="accordion-panel"
            ref={(el) => { panelRefs.current[i] = el }}
            style={{ height: i === defaultOpenIndex ? 'auto' : '0px', opacity: i === defaultOpenIndex ? 1 : 0 }}
          >
            <div className="accordion-panel__inner">
              <p>{item.answer}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}
