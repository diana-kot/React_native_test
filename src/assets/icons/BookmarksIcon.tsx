import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BookmarksIcon(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.692 6.08c0-.596-.43-1.08-.961-1.08H7.96C7.432 5 7 5.484 7 6.08v10.45l.77-.577m2.5-8.482h5.768c.532 0 .962.484.962 1.08V19l-3.846-2.882L9.308 19V8.551c0-.596.43-1.08.961-1.08z"
        stroke="#464455"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BookmarksIcon




