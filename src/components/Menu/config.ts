import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.zetherzswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.zetherzswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://zetherzswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://zetherzswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://zetherzswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://zetherzswap.info/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/zetherzswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.zetherzswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://zetherzswap.medium.com',
      },
    ],
  },
]

export default config
