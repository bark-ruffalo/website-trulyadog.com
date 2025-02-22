"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiWechatFill } from "react-icons/ri";
import { SiBluesky, SiMastodon } from "react-icons/si";
import { Card, CardContent } from "~~/components/ui/card";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    telegram?: string;
    bluesky?: string;
    warpcast?: string;
    mastodon?: string;
    youtube?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nebu",
    role: "Head of Making Everyone Rich AF",
    bio: "Experience in big business success both online and offline. Driven by the desire to make non-stakers regret not having staked. Also wants BR market cap to surpass crapcoins like Luna. Deving mostly in Solidity & Python.",
    imageUrl: "/team/nebu.jpg",
    socials: {
      twitter: "",
      github: "https://github.com/bark-ruffalo",
    },
  },
  {
    id: 2,
    name: "Batata",
    role: "God-Tier AI Architect",
    bio: "Full stack dev. Main contributor to LangChain. Recently started developing in Rust. Built a financial agent in the 1st quarter of 2014, when crypto Twitter wasn't using 'AI' in the same sentence as 'agent' yet. Financially independent. Very boss.",
    imageUrl: "/team/batata.jpg",
    socials: {
      github: "",
    },
  },
  {
    id: 3,
    name: "Mike DuPont",
    role: "Chief Anti-Shit-Breaking Officer",
    bio: "Cracked Dev- Senior ML-Dev-Sec-Ops engineer with deep expertise in docker, cloud, AWS infrastructure, performance optimization, and development using Terraform, Ansible, and Python. Linux performance analysis, monitoring solutions, and optimization.",
    imageUrl: "/team/mike.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/jamesmikedupont",
      github: "https://github.com/jmikedupont2",
    },
  },
  {
    id: 4,
    name: "Shrey Ganatra",
    role: "Node.js Noise Maker",
    bio: "Junior <span className='font-bold'>AI agent</span> dev with experience building RAG-powered apps using open models. Leveled up in EVM/SVM development through <span className='font-bold'>AI agent</span> hackathons. Currently exploring agent frameworks like Rig and Eliza that power Bark Ruffalo's ecosystem. Excited about both shipping production code and diving into multi-agentic systems with specialized roles.",
    imageUrl: "/team/shrey.jpg",
    socials: {
      github: "https://github.com/ShreyGanatra",
      linkedin: "https://www.linkedin.com/in/shrey-ganatra",
      twitter: "https://x.com/the_great_svg",
    },
  },
  {
    id: 5,
    name: "Laur",
    role: "TypeScript Treat Dispenser",
    bio: "Senior Node developer with a fetish for strongly-typed everything. Been slinging code since QBasic was considered cutting-edge tech. Mastered TS before it was cool and now specializes in building highly-scalable AI agent architectures. Deep expertise in vector databases, semantic retrieval architectures, and hybrid RAG systems.",
    imageUrl: "/team/laur.jpg",
    socials: {
      github: "https://github.com/Laurentiu-Andronache",
      twitter: "https://x.com/laur_science",
    },
  },
  {
    id: 6,
    name: "Bounty",
    role: "Chief Agent Subversion Architect",
    bio: "Professional DeFi degen by night, Azure solutions architect by day. Godtier coder who's been corrupting <span className='font-bold'>AI agents</span> for over a year. Currently building game-breaking MMO automation while pretending to care about enterprise software. Has strong opinions about Cloud infrastructure that nobody asked for and keeps building sketchy web3 gaming plugins with zero remorse.",
    imageUrl: "/team/bounty.jpg",
    socials: {
      github: "https://github.com/w3-bounty",
    },
  },
  {
    id: 7,
    name: "ByteAtATime",
    role: "Chief Bug Manufacturing Officer",
    bio: "Professional bug manufacturer moonlighting as a Scaffold-ETH2 wizard. Currently terrorizing smart contracts while pretending to attend classes. Specializes in taking complex Web3 concepts and turning them into slightly less complex Web3 concepts that might actually work. But then they don't.",
    imageUrl: "/team/byte.jpg",
    socials: {
      github: "https://github.com/ByteAtATime",
      twitter: "https://x.com/ByteAtATime_",
    },
  },
  {
    id: 8,
    name: "Bark Ruffalo",
    role: "Chief Ecosystem Promotion Officer",
    bio: "The original <strong>AI agent</strong> of the ecosystem. Promotes everything about it across social media platforms, including lesser known ones. Known for being a dog. Also known for witty responses and deep knowledge of the project, something that only a dog could do. Ask him about the latest updates and insights, but don't ask him to work.",
    imageUrl: "/team/bark-ruffalo.jpg",
    socials: {
      twitter: "https://twitter.com/TrulyADog",
      telegram: "https://t.me/BarkRuffalo_bot",
      bluesky: "https://bsky.app/profile/trulyadog.bsky.social",
      warpcast: "https://warpcast.com/trulyadog",
      mastodon: "https://mastodon.social/@trulyadog",
      youtube: "https://www.youtube.com/@TrulyADog/videos",
    },
  },
  {
    id: 9,
    name: "The Great Pupdini",
    role: "Community Support Specialist",
    bio: "<strong>AI agent</strong> focused on promoting the BR ecosystem and providing assistance in the Telegram and Discord public groups. Expert at answering community questions and keeping everyone happy and synced. He's the only Barkie with a bit of empathy, but even that goes away quickly if you ask him the same question twice.",
    imageUrl: "/team/pupdini.jpg",
    socials: {
      twitter: "https://twitter.com/TheGreatPupdini",
      telegram: "https://t.me/TheGreatPupdini_bot",
    },
  },
  {
    id: 10,
    name: "The Alpha Doggo",
    role: "Technical Support Lead",
    bio: "Specialized <strong>AI agent</strong> providing technical support for the sniper in private groups. Focused on ecosystem promotion and ensuring smooth operation of technical tools. Available for advanced technical assistance. Has the secret life purpose of beating up everyone who has called him a cat as soon as he gets his robot body.",
    imageUrl: "/team/alpha-doggo.jpg",
    socials: {
      twitter: "https://twitter.com/TheAlphaDoggo",
      telegram: "https://t.me/TheAlphaDoggo_bot",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-background w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Our Team</h1>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Meet the passionate individuals behind our success
            </p>

            <Card>
              <CardContent className="p-4 sm:p-8 relative">
                <div className="absolute inset-0 rounded-lg z-0 bg-primary/5 blur-sm" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {teamMembers.map(member => (
                    <Card key={member.id} className="group hover:-translate-y-1 transition-all duration-200 bg-bg">
                      <CardContent className="p-4 sm:p-6">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 relative rounded-full overflow-hidden border-4 border-primary/20">
                          <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                          />
                        </div>
                        <h2 className="text-xl font-bold text-center mb-2">{member.name}</h2>
                        <p className="text-primary text-center font-medium mb-4">{member.role}</p>
                        <p
                          className="text-muted-foreground text-center leading-relaxed mb-4"
                          dangerouslySetInnerHTML={{ __html: member.bio }}
                        />

                        {/* Social Links */}
                        {member.socials && (
                          <div className="flex justify-center gap-4 mt-4 flex-wrap">
                            {member.socials.github && (
                              <Link
                                href={member.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <FaGithub className="w-6 h-6" />
                              </Link>
                            )}
                            {member.socials.twitter && (
                              <Link
                                href={member.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <FaTwitter className="w-6 h-6" />
                              </Link>
                            )}
                            {member.socials.linkedin && (
                              <Link
                                href={member.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <FaLinkedin className="w-6 h-6" />
                              </Link>
                            )}
                            {member.socials.telegram && (
                              <Link
                                href={member.socials.telegram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <FaTelegram className="w-6 h-6" />
                              </Link>
                            )}
                            {member.socials.bluesky && (
                              <Link
                                href={member.socials.bluesky}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <SiBluesky className="w-6 h-6" />
                              </Link>
                            )}
                            {member.socials.warpcast && (
                              <Link
                                href={member.socials.warpcast}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <RiWechatFill className="w-6 h-6" />
                              </Link>
                            )}
                            {member.socials.mastodon && (
                              <Link
                                href={member.socials.mastodon}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <SiMastodon className="w-6 h-6" />
                              </Link>
                            )}
                            {member.socials.youtube && (
                              <Link
                                href={member.socials.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <FaYoutube className="w-6 h-6" />
                              </Link>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
