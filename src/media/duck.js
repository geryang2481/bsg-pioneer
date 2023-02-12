import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <g className="prefix__fa-group">
        <path
          className="prefix__fa-secondary"
          fill="currentColor"
          d="M512 128a96 96 0 01-96 96h-27c37.28-13.18 59-54.2 59-96z"
          opacity={0.4}
        />
        <path
          className="prefix__fa-primary"
          fill="currentColor"
          d="M401.31 277.43A41.38 41.38 0 01384 243.8a39.9 39.9 0 015-19.8c37.28-13.18 59-54.2 59-96a96 96 0 00-192 0 94.05 94.05 0 0022.1 60.59 41.44 41.44 0 019.9 26.53A40.88 40.88 0 01247.13 256h-21.69c-31.51 0-80.18-13.2-101.68-36.24C113.74 209 96 216.17 96 230.63A153.38 153.38 0 00249.38 384h-32c-76 0-138.67-55.44-150.82-128h-50.4C7 256-.63 263.66 0 272.75 8.62 388.64 105.36 480 223.43 480h107.2c55.51 0 110.81-44.52 116.72-99.71a111.23 111.23 0 00-46.04-102.86zM352 144a16 16 0 1116-16 16 16 0 01-16 16z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
