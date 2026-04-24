import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Niacinamide 10% + Zinc 1%',
    description: 'High-Strength Vitamin and Mineral Blemish Formula',
    price: 6.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKDuBzNnG35O1y0f0LKwtWYwk0AAOJO_RXnDi7yLYaI4DvqAE9NEwAO72WaAuDvSm9z5AF9Cncdev8ZdBRdnX6toG5zYeHFBzu_RAJh0OeyFF5JMAF76JMNejtR-fPgJoF7kln4LhKqySTsSNVF_vZVAcoZRJFx4UrH7dhQIe8FpGIG04bY7gHgY4HLHX_6ty0NqXjjvW_Rsjr0jBRUqA8PTwYrRkcAr0Z4mkd-ive9aFSjWELKR0AEASTQoEez9K1j-NxjdMuOA',
    category: 'Serums',
    concern: ['Blemishes', 'Textural Irregularities'],
    ingredient: ['Vitamin B'],
    isBestseller: true,
    volume: '30ml'
  },
  {
    id: '2',
    name: 'Hyaluronic Acid 2% + B5',
    description: 'A Hydration Support Formula with Ultra-Pure, Vegan Hyaluronic Acid',
    price: 8.90,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMacVztv65NVSKxO29p2dvaTkC71lfbZHpMVfcEZIq_vRhomRwncXp5l40kGgBRkqlmTmDdDURUYAiRgHnnFLlHe2L6UsFh2iccrsYY2Q_UDPq9EOKn2wd7y-6DssoDaGTCpKZjOOZrT1wd2G9OTFBQ3h8q-2Sn1z4RmVwbYz-w2lUQ5sL-Zuz5a-SA7wfZfpAbThNZLxE_yYJ84TmdqcO-y2y9ep5FEpUEK9TaDIdGDDv_djgsfVN82T_Bc_WaortEcDl6_KdSA',
    category: 'Serums',
    concern: ['Hydration'],
    ingredient: ['Acids'],
    volume: '30ml'
  },
  {
    id: '3',
    name: 'Caffeine Solution 5% + EGCG',
    description: 'Reduces Appearance of Eye-Contour Pigmentation and of Puffiness',
    price: 7.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaGesypyAEbVNGWlea8QnSTGORhv2ZXY3YPm3Mn-G3fJs9-zzJnSBAHrsWAc4jg8_umlhOS_8F8CjjLpt_To8HIsVNkwC2_G04HVKnzfeIbrY0Q0ozPQ3nLgPNlWp1RBmxD8yH3zyfT1gEsOPlIgFAb6Vmv2n9jdB_ZcblHbXqWqY4wkTMPQ8HaSbbftnbaa3xg9AMrO_74ZlzIrJjOrj_pkbK1zzqSNmyXSvR8K_a00_FatxjyqSaB7I0WaBP7A7WWqyztN12Ow',
    category: 'Serums',
    concern: ['Signs of Aging', 'Puffiness'],
    ingredient: ['Caffeine'],
    volume: '30ml'
  },
  {
    id: '4',
    name: 'Buffet + Copper Peptides 1%',
    description: 'Multi-Technology Peptide Serum for All Signs of Aging',
    price: 30.80,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU-K7undsKohRAxC8VgAmVKVMxhQbAwduLGWjWY9fvw90VJcQ7xj2ijjfTskC4TWhEQK6Bze72igabjO2iSTSgQRQ0q50h6sVhzbRHVE-WKCth9mOI3E5P_i8XRF6S8EHctC5dj3vryyyorOifCLU4SLIFRWvOkGWJRXCWbXfdKUAluizaYPH8y3ngv9HhCq5QNzxYuMuTGiiBJPRCu5-nlsqd9-vZkbrlKACZRoKC54Jihdyx9ovmyKx7cj0e1-p339b0zXyyXQ',
    category: 'Serums',
    concern: ['Signs of Aging'],
    ingredient: ['Peptides'],
    volume: '30ml'
  },
  {
    id: '5',
    name: 'Glycolic Acid 7% Toning Solution',
    description: 'Exfoliating Toning Solution with Ginseng Root and Aloe Vera',
    price: 13.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVQ9FKmOkggjj-aSWpn4VkjqLqIG_ikb65oxZLq3WuFjJGM9dP0vW8Q0Vmzv0qbL991XwFS9q8DGTipwjHBKfxEbrM7WvdEhUZ8W5Gy3XxSEOPHZanswY8LMT3mz507nADgQWjApG3NbtuH-NN6qTxY6QFD3YUm0focSWo1P0M_HT_EJFv_5rI74A4RGl09LhIRv1AV0445u4FVhppckzp1BQhMtq775KVxi1HWmmM2exhy5wF1U4PcbqY0_bkxbGZvX26vSHL0g',
    category: 'Toning Solutions',
    concern: ['Textural Irregularities', 'Dullness'],
    ingredient: ['Acids'],
    isNew: true,
    volume: '240ml'
  },
  {
    id: '6',
    name: 'Natural Moisturizing Factors + HA',
    description: 'Surface Hydration Formula with Non-Greasy Moisturization',
    price: 6.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtF2ZMDxZdd-w8l7a7IiirVNoCEc_ow86lnxfU_qORfpfhgxDSCw65Z2JPIjw52EXWqRJZnjJvNHc05XKhNmQgUbzWZeY4ItMKxSiIaWLmgkgNOy64cAUQ75OovPXaBkA5FNwhS0TDHvN8c_DbW6K6rh2OQ0KG5UVqVCRBvXYnHXkpaFpwbsVG2t2VhiJDVLrHL-4v3CNmlFFiOCsDTS3rgUtFZdGwcMGhNKTznBac6WGuVmdxXbc0_0M_jETUhcqHY_aXy-p0ig',
    category: 'Moisturizers',
    concern: ['Hydration'],
    ingredient: ['Amindo Acids'],
    volume: '30ml'
  }
];
