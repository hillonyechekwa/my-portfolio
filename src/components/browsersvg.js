import React from "react";


const Browsersvg = ({classes}) => {
  return (
    <svg viewBox="0 0 1920 1080" className={`browsersvg ${classes}`}>
      <g fill="none">  {/*has a stroke width of 8 */}
        <rect width={1920} height={1080} rx={10} />
        <rect x={4} y={4} id="window" width={1912} height={1072} rx={6}/>
      </g>
      <rect
        width={20}
        height={20}
        rx={1}
        transform="translate(1788.999 27)"
        // strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M1795.898 23.417v-1.708a1.709 1.709 0 011.708-1.709h17.083a1.709 1.709 0 011.708 1.708v17.083a1.709 1.709 0 01-1.708 1.708h-1.708"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth={4}
        strokeDasharray="2 2"
      />
      <path
        d="M1860 47l26.727-26.668M1860 20l26.727 26.67M1717.667 33h27"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth={4}
      />
      <g
        transform="translate(8 8)"
        fill="none"
        // strokeWidth={3}
      >
        <rect width={319} height={46} rx={2} stroke="none" />
        <rect x={1.5} y={1.5} width={316} height={43} rx={0.5} />
      </g>
      <path
        d="M347.245 22v20.49M337 32.245h20.49M294 39.49l15.333-15.3M294 24l15.333 15.3M40 111L26.5 97.5 40 84M81.019 84l13.5 13.5-13.5 13.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth={4}
      />
      <g>
        <path d="M148.831 100.63a.592.592 0 00-1.168-.2zm-11.088 8.184a10.06 10.06 0 01-10.059-10.059H126.5a11.242 11.242 0 0011.243 11.243zm-10.059-10.059a10.06 10.06 0 0110.059-10.059v-1.182A11.242 11.242 0 00126.5 98.757zm10.059-10.059a10.061 10.061 0 019.014 5.589l1.059-.528a11.244 11.244 0 00-10.074-6.245zm9.92 11.736a10.062 10.062 0 01-9.92 8.382v1.183a11.246 11.246 0 0011.088-9.369z" />
        <path
          d="M147.769 87.422v6.694h-6.695"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g>
        <path
          d="M228 113.211V88.572A1.573 1.573 0 01229.572 87h18.87a1.573 1.573 0 011.572 1.572v24.639a.786.786 0 01-1.378.519l-9.63-11.006-9.63 11.006a.786.786 0 01-1.376-.519z"
          fill="none"
          strokeLinejoin="round"
          // strokeWidth={3}
        />
      </g>
      <g
        transform="translate(272 81)"
        fill="none"
        // strokeWidth={4}
      >
        <rect width={1259} height={33} rx={3}/>
        <rect x={2} y={2} width={1255} height={29} rx={1} />
      </g>
      <g>
        <circle
          cx={1.235}
          cy={1.235}
          r={1.235}
          transform="rotate(90 893.235 980.735)"
          fill="none"

          strokeLinecap="round"
          strokeLinejoin="round"
          // strokeWidth={3}
        />
        <circle
          cx={1.235}
          cy={1.235}
          r={1.235}
          transform="rotate(90 887.061 986.909)"
          fill="none"

          strokeLinecap="round"
          strokeLinejoin="round"
          // strokeWidth={3}
        />
        <circle
          cx={1.235}
          cy={1.235}
          r={1.235}
          transform="rotate(90 880.886 993.084)"
          fill="none"

          strokeLinecap="round"
          strokeLinejoin="round"
          // strokeWidth={3}
        />
      </g>
    </svg>
  );
}


export default Browsersvg;
