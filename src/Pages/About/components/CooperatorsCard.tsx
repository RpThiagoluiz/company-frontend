import { RxInstagramLogo } from 'react-icons/rx'
import { TfiLinkedin } from 'react-icons/tfi'
import { VscGithubAlt } from 'react-icons/vsc'
import { mockTeam } from '@mock/team'

export function CooperatorsCard() {
    return (
        <>
            {mockTeam.map((teamMember) => (
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img
                                    src={teamMember.image}
                                    alt={`Member ${teamMember.name}`}
                                    className="rounded-full object-cover h-full w-full shadow-md"
                                />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <div className="font-bold text-3xl text-center pb-1">
                                {teamMember.name}
                            </div>
                            <p className="text-gray-800 text-sm text-center">
                                {teamMember.job}
                            </p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                {teamMember.description}
                            </p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                                <a
                                    href={teamMember.socialMedia.github}
                                    className="mx-5"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <VscGithubAlt
                                            size={25}
                                            className="text-gray-500 hover:text-purple-500"
                                        />
                                    </div>
                                </a>
                                <a
                                    href={teamMember.socialMedia.linkedIn}
                                    className="mx-5"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <TfiLinkedin
                                            size={25}
                                            className="text-gray-500 hover:text-purple-500"
                                        />
                                    </div>
                                </a>
                                <a
                                    href={teamMember.socialMedia.instagram}
                                    className="mx-5"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <RxInstagramLogo
                                            size={25}
                                            className="text-gray-500 hover:text-purple-500"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
