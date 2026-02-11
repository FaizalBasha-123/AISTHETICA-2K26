import React, { useState } from 'react';
import EventCard, { EventCardProps } from './EventCard';

// Event data
const technicalEvents: EventCardProps[] = [
  {
    title: 'Prompt Coding',
    description: 'Use AI-powered coding assistants to solve programming challenges efficiently. Test your ability to craft effective prompts and leverage AI tools.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 12:15 PM',
    participants: 'Team of 2-4',
    color: 'blue',
    details: `PROMPT CODE is a logic-based coding event where participants analyze a given problem prompt and convert it into a correct and executable program within a limited time.

Round: Prompt to Code
• Participants will be provided with a problem prompt.
• Based on the given prompt, participants must analyze the problem and write the complete program on the system.

Allowed Languages
• C
• Python

Rules
• Maximum of 2 members per team.
• Time Limit: 20 – 30 Minutes
• Only the system provided by the organizers must be used.
• Internet usage is strictly prohibited.
• The program must compile and execute without errors.
• The output must exactly match the expected result described in the prompt.
• Participants must strictly adhere to the given time limit.
• Any form of malpractice or plagiarism will lead to disqualification.

General Rules
• The decision of the judges and event coordinators is final.
• Participants are expected to maintain discipline and professionalism throughout the event.`
  },
  {
    title: 'Code Debugging',
    description: 'Find and fix bugs in provided code snippets across multiple programming languages against the clock.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 12:15 PM',
    participants: 'Team of 2-4',
    color: 'green',
    details: `CODE DEBUGGING is a technical event that tests participants' ability to identify, analyze, and fix errors in given code snippets.

Event Format
• Participants will be provided with buggy code snippets
• Teams must identify all bugs and fix them to produce correct output
• Multiple debugging challenges will be given

Allowed Languages
• C
• Python
• Java

Rules
• Team of 2-4 members
• Time Limit: 30 – 40 minutes
• Each bug fixed correctly earns points
• Code must compile and run without errors after fixing
• Only the provided system can be used
• Internet access is prohibited

Evaluation Criteria
• Number of bugs identified
• Correctness of fixes
• Code execution without errors
• Time efficiency

General Rules
• Any form of malpractice will lead to disqualification
• Judges' decisions are final
• Maintain discipline throughout the event`
  },
  {
    title: 'Technical Quiz',
    description: 'Test your knowledge in a fast-paced quiz competition covering AI, ML, and emerging technologies. Prelims followed by Finals.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM & 1:00 PM',
    participants: 'Team of 2-4',
    color: 'purple',
    details: `TECHNICAL QUIZ is a knowledge-based competition testing participants' understanding of AI, Machine Learning, Data Science, and emerging technologies.

Round 1: Prelims (10:15 AM)
• Written quiz with multiple-choice and short-answer questions
• Topics: AI, ML, Data Science, Cybersecurity, Cloud Computing
• Duration: 30 minutes
• Top teams advance to finals

Round 2: Finals (1:00 PM)
• Rapid-fire buzzer round
• Visual and audio questions
• Live audience interaction
• Duration: 45 minutes

Quiz Categories
• Artificial Intelligence & Machine Learning
• Data Structures & Algorithms
• Programming Languages
• Emerging Technologies
• Tech News & Current Affairs

Rules
• Team of 2-4 members
• No electronic devices allowed during quiz
• Marking: +10 for correct, -2 for wrong answers in finals
• Ties resolved with rapid-fire questions

Evaluation Criteria
• Speed and accuracy
• Technical knowledge depth
• Team coordination

General Rules
• Judges' decisions are final
• Maintain silence during quiz
• Any malpractice leads to disqualification`
  },
  {
    title: 'Care by AI',
    description: 'Develop AI-powered healthcare solutions to address real-world medical challenges and improve patient care.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '11:15 AM & 2:00 PM',
    participants: 'Team of 2-4',
    color: 'pink',
    details: `CARE BY AI is an innovative event challenging participants to develop AI-powered healthcare solutions for real-world medical problems.

Round 1: Ideation & Presentation (11:15 AM)
• Teams present their AI healthcare solution concept
• Problem statement will be provided
• Present solution approach, technology stack, and expected impact
• Time Limit: 10 minutes per team
• Top teams advance to Round 2

Round 2: Prototype Development (2:00 PM)
• Implement a working prototype or detailed model
• Demonstrate core functionality
• Present to judges with live demo
• Duration: 1 hour development + presentation

Solution Areas
• Disease prediction and diagnosis
• Patient monitoring systems
• Medical image analysis
• Healthcare chatbots
• Drug discovery and analysis

Technology Options
• Machine Learning models
• Natural Language Processing
• Computer Vision
• Deep Learning frameworks

Rules
• Team of 2-4 members
• Can use any programming language or framework
• Pre-built models and libraries are allowed
• Must clearly explain AI methodology
• Internet access allowed for development

Evaluation Criteria
• Innovation and impact potential
• Technical implementation
• Feasibility and scalability
• Presentation quality

General Rules
• Plagiarism leads to immediate disqualification
• Judges' decisions are final
• Focus on ethical AI in healthcare`
  },
  {
    title: 'Backtrace',
    description: 'Reverse engineer code and trace execution paths to understand complex algorithms and system behavior.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '11:15 AM & 1:00 PM',
    participants: 'Team of 2-4',
    color: 'orange',
    details: `BACKTRACE is a logic-based coding event that evaluates participants' ability to analyze a given output and back-trace the logic to write the correct program.

Round 1: Paper Coding (Backtrace on Sheet) - 11:15 AM
• Only the expected output will be provided.
• Participants must write the complete program logic and code on an A4 sheet.
• Time Limit: 30 – 40 minutes
• Allowed Languages: C and Python
• No electronic devices are allowed.
• Code must strictly produce the given output.

Round 2: System Coding (Backtrace on System) - 1:00 PM
• Output-based problem similar to Round 1 will be given.
• Participants must type and execute the program on the system.
• Time Limit: 15 – 20 minutes
• Allowed Languages: C and Python
• Internet usage is strictly prohibited.
• Code must run without errors and match the given output exactly.

Team Rules
• Maximum of 2 members per team.
• Individual participation is also allowed.

Evaluation Criteria
• Correctness of logic
• Accuracy of output
• Syntax and coding standards
• Time efficiency

General Rules
• Any form of malpractice will lead to disqualification.
• Participants must strictly adhere to the time limits.
• Judges' and coordinators' decisions are final.`
  },
  {
    title: 'Web/App Build Hackathon',
    description: 'A 2-hour intensive hackathon to build a functional web or mobile application from scratch.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '1:00 PM - 3:00 PM',
    participants: 'Team of 2-4',
    color: 'blue',
    details: `WEB/APP BUILD HACKATHON is an intensive 2-hour challenge where teams build a functional web or mobile application from scratch.

Event Format
• Theme/problem statement revealed at start
• Teams have 2 hours to build and deploy
• Final presentation and demo to judges

Development Options
• Web Application (Frontend/Full-stack)
• Mobile Application (Android/iOS)
• Progressive Web App (PWA)

Allowed Technologies
• Any frontend framework (React, Vue, Angular, etc.)
• Any backend technology (Node.js, Python, Java, etc.)
• Any mobile framework (React Native, Flutter, etc.)
• Any database or cloud service
• APIs and external libraries allowed

Rules
• Team of 2-4 members
• Duration: 2 hours (1:00 PM - 3:00 PM)
• Internet access allowed
• Pre-written code or templates not allowed
• Must start from scratch
• GitHub or live deployment recommended
• 5-minute demo and presentation required

Evaluation Criteria
• Functionality and completeness
• User Interface/User Experience
• Code quality and structure
• Innovation and creativity
• Presentation and demo
• Problem-solving approach

Deliverables
• Working application (live or localhost)
• Source code repository
• Brief documentation
• Demo presentation

General Rules
• Original work only - plagiarism disqualifies team
• Must use version control (Git recommended)
• Judges' decisions are final
• Application must be demonstrable at end of 2 hours`
  },
  {
    title: 'Paper Presentation',
    description: 'Present your research work on AI and emerging technologies in front of a panel of judges and peers.',
    type: 'technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 2:45 PM',
    participants: 'Team of 2-4',
    color: 'green',
    details: `PAPER PRESENTATION is a research-oriented event where participants present their original research, case studies, or review papers on AI and emerging technologies.

Event Format
• Continuous presentations throughout the day
• Teams present in 15-minute slots
• 10 minutes presentation + 5 minutes Q&A
• Panel of expert judges and faculty

Presentation Topics
• Artificial Intelligence & Machine Learning
• Deep Learning and Neural Networks
• Natural Language Processing
• Computer Vision
• Data Science & Big Data Analytics
• Cybersecurity
• Cloud Computing & Edge Computing
• Internet of Things (IoT)
• Blockchain Technology
• Emerging Tech Trends

Paper Requirements
• Original research or comprehensive review
• Following IEEE or ACM format
• 4-6 pages including references
• Abstract, Introduction, Methodology, Results, Conclusion
• Plagiarism check will be conducted

Submission Guidelines
• Submit paper 2 days before event
• PowerPoint or PDF presentation required
• Maximum 15 slides recommended
• Include diagrams, charts, and visuals

Rules
• Team of 2-4 members
• All team members should participate in Q&A
• Presentation strictly within time limit
• Professional attire recommended
• Technical questions will be asked

Evaluation Criteria
• Content quality and originality (30%)
• Technical depth and accuracy (25%)
• Presentation skills and clarity (20%)
• Visual aids and slide design (10%)
• Q&A handling (15%)

General Rules
• Plagiarism leads to disqualification
• Papers may be published in proceedings
• Judges' decisions are final
• Maintain professional conduct`
  }
];

const nonTechnicalEvents: EventCardProps[] = [
  {
    title: 'Link-It',
    description: 'Connect clues and solve puzzles in this engaging word association game. Test your lateral thinking and creativity.',
    type: 'non-technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 12:15 PM',
    participants: 'Team of 2-4',
    color: 'pink',
    details: `LINK-IT is a word association and connection game that challenges participants' lateral thinking, general knowledge, and ability to find patterns.

Event Format
• Teams are given seemingly unrelated words, images, or clues
• Participants must find the common link or connection
• Multiple rounds with increasing difficulty
• Fastest correct answer wins points

Round Structure
Round 1: Word Connections (Warm-up)
• Find the common link between 4-5 words
• Time Limit: 2 minutes per question

Round 2: Visual Links
• Connect images, logos, or symbols
• Time Limit: 3 minutes per question

Round 3: Mixed Connections (Final)
• Combination of words, images, and audio clues
• Most challenging round
• Time Limit: 5 minutes per question

Rules
• Team of 2-4 members
• All team members can discuss
• One answer submission per question
• No electronic devices or internet allowed
• Spelling accuracy matters for written answers

Scoring System
• Correct answer on first attempt: 10 points
• Partial/close answer: 5 points
• Incorrect answer: 0 points
• Time bonus for quick answers

Categories Include
• Movies and Entertainment
• Sports and Games
• History and Geography
• Science and Technology
• Current Affairs
• Pop Culture

Evaluation Criteria
• Correctness of connections
• Speed of response
• Team coordination
• Logical reasoning

General Rules
• Judges' decisions are final
• Any malpractice leads to disqualification
• Maintain silence when other teams are answering`
  },
  {
    title: 'Memory Mania',
    description: 'A fun memory card game where you flip over cards featuring pictures. Find and match pairs to test your memory skills.',
    type: 'non-technical',
    date: 'Feb 18, 2026',
    time: '10:15 AM - 12:15 PM',
    participants: 'Team of 2-4',
    color: 'blue',
    details: `MEMORY MANIA is a memory-based challenge that tests participants' observation, concentration, and recall ability. Participants must carefully observe a list of names displayed for a short duration and accurately reproduce them from memory.

How the Event Is Conducted
• A list of names will be displayed.
• The list will be shown for a limited time.
• After the display is closed, answer sheets will be provided to participants.
• Participants must write down all the names they remember from the displayed list.

Rules
• Participants must carefully observe the names shown on the screen.
• Writing is allowed only after the sheets are provided.
• 7 – 10 minutes to write the answers after the display is closed.
• Team of 2-4 members
• No discussion is allowed once the display is closed.
• Electronic devices are strictly prohibited.
• Only the names shown on the screen should be written.
• Any form of malpractice will lead to disqualification.
• Participants must strictly adhere to the given time limit.

Evaluation Criteria
• Number of correctly recalled names
• Accuracy in spelling
• No extra or irrelevant answers

General Rules
• Judges' and coordinators' decisions are final.
• Discipline must be maintained throughout the event.`
  },
  {
    title: 'Meme Creation',
    description: 'Unleash your creativity and humor by creating the most hilarious and relatable memes on given themes.',
    type: 'non-technical',
    date: 'Feb 18, 2026',
    time: '1:00 PM - 2:00 PM',
    participants: 'Team of 2-4',
    color: 'green',
    details: `MEME CREATION is a creative competition where participants design humorous and relatable memes based on given themes or current trends.

Event Format
• Themes will be announced at the start
• Participants create original memes using provided tools
• Multiple memes can be submitted
• Best memes will be judged on creativity and humor

Round Structure
• Theme announcement: 5 minutes
• Creation time: 45 minutes
• Submission and judging: 10 minutes

Meme Categories
• Tech and AI humor
• College life and student struggles
• Current events and trending topics
• Social media culture
• General humor and satire

Tools Allowed
• Any meme generator or editing software
• Photoshop, Canva, or similar tools
• Mobile apps for meme creation
• Templates or custom designs both allowed

Rules
• Team of 2-4 members
• Must create 3-5 memes within time limit
• Content must be appropriate and non-offensive
• No copyrighted material without credit
• Original captions and creativity encouraged
• Internet access allowed for reference and tools
• All team members should contribute

Submission Requirements
• High-quality image format (PNG/JPG)
• Clear and readable text
• Proper meme format with template or original design
• Submit via provided platform/email

Evaluation Criteria
• Humor and wit (30%)
• Creativity and originality (25%)
• Relevance to theme (20%)
• Visual quality and design (15%)
• Relatability and impact (10%)

Bonus Points
• Viral potential
• Clever wordplay
• Cultural references
• Original template design

General Rules
• No offensive, discriminatory, or inappropriate content
• Plagiarism leads to disqualification
• Judges' decisions are final
• Memes may be shared on social media with credit
• Top memes may be featured in college publications`
  },
  {
    title: 'AI Short Film Creation',
    description: 'Create a short film using AI tools and showcase your storytelling abilities with cutting-edge technology.',
    type: 'non-technical',
    date: 'Feb 18, 2026',
    time: '1:00 PM - 2:00 PM',
    participants: 'Team of 2-4',
    color: 'purple',
    details: `AI SHORT FILM CREATION is an innovative event combining storytelling with artificial intelligence tools to create engaging short films.

Event Format
• Theme revealed at start of event
• Teams conceptualize and create a short film using AI tools
• Must incorporate AI-generated content
• Final screening and judging

Time Allocation
• Planning and scripting: 10 minutes
• Content creation: 40 minutes
• Editing and finalization: 10 minutes

AI Tools Allowed
• AI Video Generators (Runway, Synthesia, D-ID)
• AI Image Generators (Midjourney, DALL-E, Stable Diffusion)
• AI Script Writers (ChatGPT, Claude, Copy.ai)
• AI Voice Generators (ElevenLabs, Murf.ai)
• AI Music Generators (Soundraw, Beatoven)
• Video editing software with AI features

Film Requirements
• Duration: 30 seconds to 2 minutes
• Must use at least 2 different AI tools
• Clear storyline or message
• Can combine AI-generated with original content
• Credits must list AI tools used

Genres Open
• Drama
• Comedy
• Science Fiction
• Documentary Style
• Experimental
• Social Message

Rules
• Team of 2-4 members
• Total duration: 1 hour
• Internet access allowed
• Can use free or trial versions of AI tools
• Must be original concept (no direct copies)
• Pre-made assets allowed if credited
• Team logo or name in credits

Submission Format
• MP4 or MOV format
• Minimum 720p resolution
• Submit via USB/cloud link
• Include list of AI tools used

Evaluation Criteria
• Creative use of AI tools (25%)
• Storytelling and narrative (25%)
• Visual quality and editing (20%)
• Innovation and originality (15%)
• Theme relevance (10%)
• Technical execution (5%)

Bonus Points
• Seamless AI integration
• Original music/soundtrack
• Unexpected twist or creativity
• Professional polish

General Rules
• All content must be appropriate
• Give credit to all AI tools and assets used
• No plagiarism of existing films
• Judges' decisions are final
• Films may be showcased in symposium highlights`
  },
  {
    title: 'E-Sports (Free Fire)',
    description: 'Battle it out in Free Fire tournament. Two intense gaming sessions with exciting prizes for top performers.',
    type: 'non-technical',
    date: 'Feb 18, 2026',
    time: '10:00 AM & 2:00 PM',
    participants: 'Team of 2-4',
    color: 'pink',
    details: `FREE FIRE TOURNAMENT is a competitive gaming event where teams battle in Battle Royale matches for glory and prizes.

Event Schedule
Morning Match: 10:00 AM – 10:45 AM
Afternoon Match: 2:00 PM – 2:45 PM
Each session duration: 45 minutes

Rules & Regulations
1. All players must join before the match start time.
2. Late entry is not allowed after the game starts.
3. Hacking or cheating will result in instant disqualification.
4. Teaming with other squads is strictly banned.
5. Respect all players and organizers.
6. Internet issues are the player's responsibility.
7. Organizer decision is final.
8. Screenshot of result must be submitted after the match.
9. AFK players will not receive points.
10. Only registered players can participate.

Points Table
┌──────────┬────────┐
│   Rank   │ Points │
├──────────┼────────┤
│   1st    │   15   │
│   2nd    │   12   │
│   3rd    │   10   │
│   4th    │    8   │
│   5th    │    6   │
│   6th    │    4   │
│ 7th–10th │    2   │
└──────────┴────────┘

Kill Points: 2 points per kill

Scoring Formula
Total Score = Rank Points + Kill Points

Example: 3rd place with 5 kills = 10 + (5 × 2) = 20 points

Team Requirements
• Squad of 4 players
• All members must be registered
• Team name required during registration
• Substitute players allowed (must be pre-registered)

Game Settings
• Mode: Battle Royale (Squad)
• Map: Will be announced before match
• Match type: Custom room
• Room ID and password shared 10 minutes before start

Requirements
• Free Fire installed and updated
• Stable internet connection
• Device: Mobile phone/tablet (emulators not allowed)
• In-game name must match registration

Match Conduct
• Join custom room 5 minutes before start
• No voice chat with other teams
• Fair play expected from all participants
• Follow organizer instructions in game chat

Disqualification Grounds
• Use of hacks, mods, or cheats
• Inappropriate in-game behavior
• Teaming with rival squads
• AFK during match
• Violence or harassment

Prize Distribution
• Top 3 teams receive prizes
• Certificates for all participants
• Special awards for most kills

General Rules
• Organizers reserve right to change rules if needed
• Technical issues during match are player's responsibility
• Judges' and organizers' decisions are final
• Professional gaming conduct expected`
  }
];

const Events = () => {
  const [eventType, setEventType] = useState<'technical' | 'non-technical'>('technical');

  const toggleEventType = () => {
    setEventType(eventType === 'technical' ? 'non-technical' : 'technical');
  };

  const currentEvents = eventType === 'technical' ? technicalEvents : nonTechnicalEvents;

  return (
    <section id="events" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Event Schedule & Details</h2>
        <p className="section-subtitle text-center">
          Complete event information with timings and venue details for AISTHETICA 2K26
        </p>
        
        {/* Enterprise Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mt-12 mb-12">
          <span className={`font-semibold text-base transition-all px-4 py-2 rounded-lg ${
            eventType === 'technical' 
              ? 'text-white bg-gradient-to-r from-green-600 to-green-500 shadow-lg' 
              : 'text-gray-500 bg-transparent'
          }`}>
            Technical Events
          </span>
          <button
            onClick={toggleEventType}
            className="relative inline-flex h-9 w-[72px] items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-inner overflow-hidden"
            style={{ backgroundColor: eventType === 'technical' ? '#16a34a' : '#d1d5db' }}
          >
            <span
              className={`inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
                eventType === 'technical' ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`font-semibold text-base transition-all px-4 py-2 rounded-lg ${
            eventType === 'non-technical' 
              ? 'text-white bg-gradient-to-r from-green-600 to-green-500 shadow-lg' 
              : 'text-gray-500 bg-transparent'
          }`}>
            Non-Technical Events
          </span>
        </div>

        {/* Event Count Badge */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            {currentEvents.length} {eventType === 'technical' ? 'Technical' : 'Non-Technical'} Events
          </span>
        </div>
        
        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentEvents.map((event, index) => (
            <EventCard key={`${eventType}-${index}`} {...event} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            className="button-gradient text-white font-semibold py-4 px-10 rounded-xl text-lg hover:shadow-xl transition-shadow"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1itvVP4cBi0zC25Y8dnpyn2jgGyZJsDpcj7KVrYb5lhpdQQ/viewform?usp=header', '_blank')}
          >
            Register for Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
