/**
 * Credit goes to `framer-motion` of this useful utilities.
 * License can be found here: https://github.com/framer/motion
 */

import {
  EventListenerWithPointInfo,
  getPointerEventName,
  wrapPointerEventHandler,
} from "@chakra-ui/utils"
import { useEventListener } from "./use-event-listener"

export function usePointerEvent(
  env: Document | HTMLElement,
  eventName: string,
  handler: EventListenerWithPointInfo,
  options?: AddEventListenerOptions,
) {
  return useEventListener(
    getPointerEventName(eventName),
    wrapPointerEventHandler(handler, eventName === "pointerdown"),
    env,
    options,
  )
}
