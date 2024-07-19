import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Downloads',
  // description:
  //   'Pay once and get life-time access to our high quality components.',
  plans: [
    {
      id: 'mac',
      title: 'MacOS Builds',
      isRecommended: true,
      description: 'Required MacOS X and higher',
      price: 'Free',
      features: [
        {
          title: 'MIT License',
        },
        {
          title: 'Authentication (Clerk/Supabase/Magic)',
        },
        {
          title: 'Form (react-hook-form)',
        },
        {
          title: 'Modals manager',
        },
        {
          title: 'Hotkeys',
        },
        {
          title: 'Web3 components',
        },
        {
          title: 'And much more...',
        },
      ],
      action2: {
        label: "  Download for MacOS (Apple Silicon)",
        href: '#',
      },

      action1: {
        label: "  Download for MacOS (Intel Chip)",
        href: '#',
      },
    },
    {
      id: 'windows',
      title: 'Windows Builds',
      description: 'Require Windows10 and Higher.',
      price: 'Free',
      isRecommended: true,
      features: [
        {
          title: 'One project',
        },
        {
          title: 'One developer',
        },
        {
          title: 'Advanced components',
        },
        {
          title: 'Multiple themes',
        },
        {
          title: 'Next.js and Electron boilerplates',
        },
        {
          title: 'Private discord community',
        },
        {
          title: '1 year of updates',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],

      action2: {
        label: " Download in ZIP(Portable)",
        href: '#',
      },

      action1: {
        label:" Download in .EXE",
        href: '#',
      },
    },
    {
      id: 'startup',
      title: 'Linux Builds',
      isRecommended: true,
      description: 'Require Debian based Architecture.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text>
          <Text>€499,-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Unlimited projects',
        },
        {
          title: 'Unlimited developers',
        },
        {
          title: '1 year of updates',
        },
        {
          title: 'Everything from Bootstrap',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action2: {
        label: " Download in TAR",
        href: '#',
      },

      action1: {
        label:" Download in AppImage",
        href: '#',
      },
    },
  ],
}
