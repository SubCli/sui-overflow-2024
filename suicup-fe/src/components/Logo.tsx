import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps
{
  disabledLink?: boolean;
}

const Logo = forwardRef<any, Props>(({ disabledLink = false, sx }, ref) =>
{
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box ref={ref} sx={{ width: 90, height: 90, marginRight: theme.spacing(1), cursor: 'pointer', ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g xmlns="http://www.w3.org/2000/svg" transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill={PRIMARY_MAIN} fill-rule="evenodd" stroke="none" stroke-width="1">
          <path d="M2285 4060 c-422 -33 -854 -272 -1105 -610 -140 -189 -219 -352 -268 -550 -40 -160 -52 -261 -52 -430 0 -318 84 -593 262 -860 195 -293 499 -520 840 -629 209 -66 444 -85 683 -53 218 29 377 85 579 202 275 159 528 445 655 742 92 215 125 379 125 613 -1 232 -33 395 -120 607 -58 141 -114 235 -241 401 -56 74 -240 241 -337 306 -106 72 -321 174 -431 206 -180 51 -391 71 -590 55z m445 -115 c102 -23 272 -81 345 -118 61 -30 168 -99 263 -169 195 -144 416 -454 495 -693 32 -95 67 -291 73 -405 14 -238 -42 -514 -142 -711 -37 -74 -144 -241 -182 -284 -220 -252 -429 -398 -702 -488 -329 -109 -650 -98 -990 34 -371 144 -653 420 -821 802 -175 396 -155 857 54 1272 116 231 350 469 604 613 101 57 318 134 443 156 117 21 453 16 560 -9z" />
          <path d="M2332 3782 c-158 -57 -243 -224 -197 -387 6 -19 -1 -22 -70 -34 -115 -19 -241 -58 -330 -102 -136 -68 -185 -132 -193 -254 -6 -99 21 -167 86 -219 70 -55 65 -66 -28 -66 l-76 0 -13 35 c-42 117 -236 128 -311 18 -23 -34 -25 -47 -31 -202 -3 -91 -12 -185 -19 -209 -16 -55 -1 -136 35 -189 13 -21 145 -158 292 -305 186 -186 274 -268 289 -268 27 0 47 23 42 49 -2 11 -124 143 -272 293 -283 286 -315 328 -302 391 10 48 33 67 82 67 35 0 47 -5 68 -31 14 -17 26 -35 26 -40 0 -6 114 -122 253 -259 l252 -250 90 -31 c89 -32 91 -33 211 -153 66 -67 128 -138 137 -158 27 -57 37 -130 37 -257 0 -120 6 -141 41 -141 42 0 49 25 49 164 0 148 15 218 58 276 14 19 71 81 127 136 92 94 105 103 170 124 39 13 86 31 105 41 19 10 139 120 266 246 177 174 236 239 252 275 11 25 29 51 40 57 33 18 90 13 112 -9 25 -25 27 -97 4 -145 -8 -18 -139 -157 -290 -308 -169 -169 -274 -282 -274 -294 0 -10 5 -24 12 -31 33 -33 56 -15 332 261 315 314 332 339 322 449 -4 35 -10 144 -14 243 -7 188 -12 208 -58 244 -88 69 -223 40 -264 -59 l-12 -30 -89 0 c-58 0 -89 4 -89 11 0 6 23 32 52 57 67 61 88 107 88 197 0 129 -61 207 -215 281 -87 41 -241 87 -339 100 l-46 7 7 36 c14 63 7 154 -15 203 -25 57 -94 129 -154 159 -60 31 -165 36 -236 11z m167 -82 c134 -38 194 -192 125 -320 -77 -143 -252 -162 -357 -39 -80 93 -75 215 12 299 65 64 139 84 220 60z m-280 -444 c31 -33 130 -76 191 -83 69 -8 154 19 221 70 51 39 54 39 113 33 101 -11 288 -60 345 -91 30 -17 64 -43 75 -58 19 -26 19 -30 6 -55 -37 -67 -261 -139 -504 -163 -132 -13 -421 -7 -546 11 -104 16 -260 56 -324 84 -108 48 -127 103 -53 157 51 38 68 44 182 75 102 28 172 41 231 43 31 1 46 -5 63 -23z m-446 -341 c68 -31 184 -61 321 -82 157 -25 569 -24 711 1 186 32 322 78 392 132 l33 25 0 -51 c0 -62 -24 -88 -117 -131 -282 -127 -795 -156 -1158 -64 -231 58 -325 119 -325 211 l0 45 45 -31 c25 -17 69 -42 98 -55z m-375 -171 c21 -14 22 -22 22 -149 l0 -135 -32 20 c-19 12 -51 20 -75 20 l-43 0 0 104 c0 104 0 104 31 130 35 30 65 33 97 10z m2171 1 c38 -19 41 -30 41 -143 l0 -97 -52 0 c-29 0 -63 -4 -75 -8 -23 -8 -23 -8 -23 98 0 113 8 141 43 155 31 12 34 12 66 -5z m-1589 -101 c311 -66 860 -45 1064 40 21 9 41 16 43 16 3 0 2 -17 -1 -37 -3 -21 -15 -155 -26 -298 -29 -380 -21 -345 -95 -409 -44 -37 -88 -63 -137 -81 -111 -42 -159 -77 -282 -207 l-113 -119 -129 131 c-134 137 -173 166 -263 195 -77 25 -98 38 -157 95 -61 59 -58 52 -74 260 -6 80 -15 190 -20 245 -5 55 -9 128 -10 162 l0 62 43 -15 c23 -9 94 -26 157 -40z m-278 -239 c9 -110 17 -213 17 -230 1 -28 -4 -24 -99 70 l-100 100 0 133 0 133 83 -3 82 -3 17 -200z m1668 82 l0 -122 -110 -110 c-60 -60 -111 -107 -113 -104 -4 4 14 248 28 392 l7 67 94 0 94 0 0 -123z" />
          <path d="M2393 3604 c-58 -60 -39 -135 38 -159 27 -9 18 -30 -12 -32 -13 0 -30 -1 -36 -2 -20 -2 -15 -19 15 -57 27 -35 62 -46 62 -20 0 8 14 28 30 44 17 17 30 39 30 49 0 29 -29 64 -66 79 -56 24 -43 50 22 45 32 -3 37 25 9 48 -14 10 -25 24 -25 30 0 22 -36 8 -67 -25z" />
          <path d="M2330 3054 c-198 -38 -240 -52 -240 -78 0 -20 71 -45 164 -58 109 -14 385 -5 452 16 105 33 85 66 -60 98 -81 18 -269 31 -316 22z" />
          <path d="M2184 2290 c-28 -11 -64 -58 -64 -82 0 -52 38 -86 113 -104 17 -4 27 -13 27 -24 0 -24 -30 -33 -65 -20 -39 15 -65 4 -65 -26 0 -19 8 -28 35 -40 49 -20 87 -18 125 9 44 29 55 70 32 117 -14 28 -26 37 -69 50 -62 18 -70 25 -53 45 10 12 23 14 58 9 44 -7 61 2 62 33 0 31 -88 53 -136 33z" />
          <path d="M2372 2288 c-8 -8 -12 -44 -12 -105 0 -150 34 -203 130 -203 62 0 105 22 120 61 17 48 24 198 11 232 -12 32 -45 36 -61 8 -5 -11 -10 -60 -10 -108 0 -99 -7 -113 -56 -113 -48 0 -58 21 -64 134 -5 92 -7 101 -25 104 -11 1 -26 -3 -33 -10z" />
          <path d="M2670 2275 c-5 -14 -10 -77 -10 -140 0 -94 3 -116 18 -135 16 -19 22 -21 40 -11 22 12 22 16 20 159 l-3 147 -27 3 c-22 3 -30 -2 -38 -23z" />
        </g>
      </svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
          />
          <path
            fill="url(#BG2)"
            d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
          />
          <path
            fill="url(#BG3)"
            d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
          />
        </g>
      </svg> */}
    </Box>
  );

  if (disabledLink)
  {
    return <>{logo}</>;
  }

  return <NextLink href="/dashboard">{logo}</NextLink>;
});

export default Logo;