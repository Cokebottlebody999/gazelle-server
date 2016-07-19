const data = {
  issues: {
    "55": {
      pubDate: "May 1, 2016", // TODO: convert to unix time and format with Moment.js before release
      articles: {
        opinion: {
          "0": { $type: "ref", value: ["articlesBySlug", "palestine-hamilton"] },
        },
        features: {
          "0": { $type: "ref", value: ["articlesBySlug", "remembering-ruben"] },
        },
        news: {
          "0": { $type: "ref", value: ["articlesBySlug", "parents"] },
        },
      },
    },
  },

  categories: {
    opinion: {
      "0": { $type: "ref", value: ["articlesBySlug", "palestine-hamilton"] },
    },
    features: {
      "0": { $type: "ref", value: ["articlesBySlug", "remembering-ruben"] },
    },
    news: {
      "0": { $type: "ref", value: ["articlesBySlug", "parents"] },
    },
  },

  authors: {
    "0": { $type: "ref", value: ["authorsBySlug", "ahmed-meshref"] },
    "1": { $type: "ref", value: ["authorsBySlug", "rend-beiruti"] },
    "2": { $type: "ref", value: ["authorsBySlug", "daniah-kheetan"] },
    "3": { $type: "ref", value: ["authorsBySlug", "tala-nassar"] },
  },

  // JSON Graph structure maintains data by reference rather than by duplication
  // to avoid stale data
  articlesBySlug: {
    "palestine-hamilton": {
      title: "President Hamilton's Response to BDS is Unacceptable",
      image: "/images/palestine-hamilton.jpg",
      slug: "palestine-hamilton",
      issueId: "55",
      category: "opinion",
      teaser: "This is a sample article description. This is meant to grab the reader's attention. It should be no longer than one hundred & 40 characters.",
      body: "In a historic move, the NYU Graduate Student Organizing Committee, a union that represents roughly 1,200 graduate students, recently voted to endorse and join the Boycott, Divestment and Sanctions movement, a global non-violent movement aimed at challenging Israeli apartheid. The BDS movement calls for NYU to withdraw from Israeli academic institutions involved in the violations of the human and civil rights of the Palestinian people. Out of the more than 645 union members who participated in the vote, a majority of 66% voted to endorse and join the BDS movement. For those who are unaware, the BDS movement’s objectives are: 1. Ending its [Israeli] occupation and colonization of all Arab lands occupied in June 1967 and dismantling the Wall; 2. Recognizing the fundamental rights of the Arab-Palestinian citizens of Israel to full equality; 3. Respecting, protecting and promoting the rights of Palestinian refugees to return to their homes and properties as stipulated in UN Resolution 194.” To our disappointment, NYU’s President Andrew Hamilton attacked the decision of the GSOC in a way that we believe is insulting to both the cause of Palestinian human rights and the democratic vote put forth by the GSOC. In the memo responding to the vote, President Hamilton used “academic freedom” to justify the boycott’s rejection, completely neglecting the BDS movement’s intention of calling for justice and the rights of the Palestinian people. The GSOC’s vote called for NYU to break ties with academic institutions that are funded by the Israeli government. The intention of this decision was not to limit academic freedom but to advocate for the basic human rights of the Palestinian people, as well as to demonstrate against the academic restriction forced upon them by the Israeli occupation. It called for the academic freedom of Palestinians constrained by the violations of the Israeli government. We are deeply disheartened by President Hamilton’s inconsiderate statement since it undermines the voices of the Palestinian people and NYU’s own students who fell victims to the occupation, the academic freedom of Palestinian students and the democratic decision put forth by students that belong to the very institute he is leading. More importantly, this situation sheds light on a larger trend that we are frustrated with — the utter dismissal of student concerns and imbalance of responses in many situations that the NYU leadership might deem unimportant or  “at odds with the University’s position.” In response to President Hamilton’s discouraging position, members of the GSOC have issued an important statement that we fully agree with and choose to share with our NYU Abu Dhabi community. This statement conforms with the BDS movement’s objectives, which we stand by. We hope that this clarification of the objectives of the BDS movement will encourage President Hamilton to reconsider his public statements, which have only led to the marginalization of his own students.",
      html: "<p>In a historic move, the NYU Graduate Student Organizing Committee, a union that represents roughly 1,200 graduate students, recently voted to endorse and join the Boycott, Divestment and Sanctions movement, a global non-violent movement aimed at challenging Israeli apartheid. The BDS movement calls for NYU to withdraw from Israeli academic institutions involved in the violations of the human and civil rights of the Palestinian people.</p><p>Out of the more than 645 union members who participated in the vote, a majority of 66% voted to endorse and join the BDS movement. For those who are unaware, the BDS movement’s objectives are:<br> 1. Ending its [Israeli] occupation and colonization of all Arab lands occupied in June 1967 and dismantling the Wall;<br> 2. Recognizing the fundamental rights of the Arab-Palestinian citizens of Israel to full equality;<br>3. Respecting, protecting and promoting the rights of Palestinian refugees to return to their homes and properties as stipulated in UN Resolution 194.”",
      authors: [
        { $type: "ref", value: ["authorsBySlug", "tala-nassar"] },
        { $type: "ref", value: ["authorsBySlug", "daniah-kheetan"] },
      ],
    },
    "remembering-ruben": {
      title: "Remembering Rubén",
      image: "/images/remembering-ruben.jpg",
      slug: "remembering-ruben",
      issueId: "55",
      category: "features",
      teaser: "This is a sample article description. This is meant to grab the reader's attention. It should be no longer than one hundred & 40 characters.",
      body: "On May 3, theater students received an email from the Head of Department Rubén Polendo, informing them of his imminent departure from NYU in Abu Dhabi. Starting in the Fall of 2016, Polendo will be the new Chair of Tisch Drama at New York University. Embodying the liberal arts spirit, Polendo had majored in Biochemistry, only to switch gears and pursue a lifelong journey into the arts. At NYUAD, Polendo has touched many hearts inside and outside the Theater Department. Below, students share memories of Polendo. “You have to be more mindful, Adam”, Rubén would tell me after he spotted me absent-mindedly playing with my curls or chewing gum in apathy. At a time when I was dealing with a lot and making a lot of bad choices and bad impressions, he believed in me. He would sit me down and tell me how I could develop. He never tried to make me a better student. It was always about being a better artist and citizen. He would be running between two classes and trips to India and rehearsal and Arts Center administration, and yet somehow miraculously still made the time to check in with every one of us and know we are okay. When we did have a conversation with him, we would leave feeling overwhelmed – there was so much to do and so little time. And yet we knew everything was going to be okay. We had a warm-hearted father figure who would always have our back when we were falling, literally in some physical exercises. He would ask us to fail, keep going, fail again, and of course, “stay in the attempt.” The school assigned Rubén to be my first faculty mentor because I told them I wanted to study literature. And then, once I arrived, I was captivated by a visit to the science labs and their aspirations of a holistic science curriculum. I came to Rubén a one-week-old freshman already in crisis about what to study, separate passions tugging at me and unsure of where to turn. And instead of limiting me as I expected, he celebrated that. He told me how his undergraduate studies in chemistry uniquely equipped him for directing and art-making. His encouragement gave me permission to pursue both art and science, and his advocacy with administration opened those doors that I needed. Rubén made the transdisciplinary ideal of NYUAD reality, for me and for many others, as one of the first faculty members with the background and vision to reach across department lines. Although he will be gone from campus, I firmly hope that his spirit of rigorous exploration and creative experimentation will continue to define the NYUAD education. Rubén’s vision for theater as a device for change, exploration and discovery were the very things that made me consider theater as a viable major. I doubt I would have pursued theater if he wasn’t there to help me believe that art was capable of fulfilling more than just a need to be entertained. He taught me to question instead of simply accept things and I owe it to him for developing my curiosity that had remained dormant in me before I came to NYU Abu Dhabi. Rubén happened to me at the absolute low of my college career— hopefully. I had lost faith in NYU Abu Dhabi, in the people around me, in my education but mostly, in myself. It was a terrible place to be. On Candidate Weekend, quite frankly, you are fed a lot of crap. About how NYUAD is different, wonderful and a top-notch school and really in my first one and a half years, I saw that nowhere. Least of all in my education. But when I met Rubén, when I took Making Theater, I finally started believing in NYUAD and myself. Rubén transformed my life. And I’m not the kind of person who throws around such words lightly. He made me see the specialness in me and in NYUAD. He gave me a second chance at life and college. And for that, I will forever be indebted to him. ‘Stay stubborn until you are not’ is just one of the numerous life lessons Rubén has taught me – in such little time. Thank you Rubén. It is perhaps only a slight exaggeration to say that I would not have survived my freshman year without Rubén. At the very least, I would have transferred out. I cannot count my blessings enough that when I was Skyping with my mentor, Katherine Williams, she brought up Reinventions of Love. Everyone who has taken that class has been profoundly affected by it. Rubén has a way of pulling your opinions out of you. I happen to have a very expressive face. Whenever I grimaced or wrinkled my forehead, Rubén pointed to me and said, “That, what was that? Say what you are thinking.” The subject of love brings up many complex emotions and opinions that are sometimes so deeply opposed to the caricatures and superficial assumptions we make of each other. To watch how my classmates and I evolved that first semester expanded my empathy and shaped what I believe and how I articulate those believes. From rephrasing “I feel” to “I think,” to making statements instead of pitching sentences up into questions, the way I changed my language slowly carved ruts into my thought patterns that let me trust what I was saying. Discussing love with Rubén and my classmates was the only thing that got me to get up during that first semester. I ran into a different professor in the hallway outside of Common Ground. We smiled and greeted each other. He told me that I must be doing well, because I was smiling. I had to laugh, because that was a few days after the health center would not let me go to class before the councilor returned, because I had circled that I sometimes thought I would be better off dead. Dragging myself out of bed that first semester was incredibly difficult, but I was never even late to a single one of Rubén’s classes. By the end of the class I was not only convinced that I wanted to take Making Theater, but also that I wanted to be a Theater Major — a move that surprised no one except myself, given my high school theater career. I remember my friend Jordan urging me to ask Rubén about the Theater Mitu internship during the summer between freshman and sophomore year. I could barely get out the words. I expected Rubén to say, let me think about that for a few days and then to turn me down. Instead he smiled and said he was planning on asking me if I was interested in it. While most of Theater Mitu was in India for the Intensive, Rubén and I spent many days alone in his office, working side by side. Every few days he would turn to me and go “Have you eaten yet?,” despite me not having moved from his side that morning. Over those lunches we talked about art and life. What I will miss most is not the inspirational figure, who is the head of what in jest is called the cult of the theater department, but having tea with Rubén once a week. By the end of Reinventions of Love, I was not only a theater major, but had turned from a shy little kid into someone who trusted their voice and their opinion — and frankly talks far too much in class now. Rubén taught me to consider myself an artist. He models a lifestyle that makes me believe that an artistic life is possible and attainable. I am not proud to admit that at first my joy and congratulations at his new position as Chair of Tisch were overwhelmed by my deep sense of loss. I am still not sure how I will succeed in my capstone without his direct guidance — though if Rubén has taught me anything, it is that I will. The idea that I won’t be able to duck into his office to catch up on things is heartbreaking. When I first got the email, I went numb. Perhaps half an hour later, I had one of the worst panic attacks of my life — quite a feat, given my anxiety disorder. After that, I cried the rest of the evening, first while skyping with my mother, then with Arianna Stucki. I am finally at a place though where my joy and congratulations outweigh my devastation. I have been blessed to have Rubén as such a close advisor, mentor, and friend. It is only right that he take on a position where he can guide and influence so many more people than in our tiny theater department. To say that Rubén changed my life is an understatement. When I think back on the most rewarding experiences of my time at NYU Abu Dhabi, Rubén is almost always in the picture. Thank you for being the greatest friend, and always knowing the right things to say. To the person that has opened me up to questions, challenged me to be more and pushed me to imagine, I owe so much. You’ll always be with me.",
      html: "<p>On May 3, theater students received an email from the Head of Department Rubén Polendo, informing them of his imminent departure from NYU in Abu Dhabi. Starting in the Fall of 2016, Polendo will be the new Chair of Tisch Drama at New York University. Embodying the liberal arts spirit, Polendo had majored in Biochemistry, only to switch gears and pursue a lifelong journey into the arts. At NYUAD, Polendo has touched many hearts inside and outside the Theater Department.</p><p>Below, students share memories of Polendo. “You have to be more mindful, Adam”, Rubén would tell me after he spotted me absent-mindedly playing with my curls or chewing gum in apathy. At a time when I was dealing with a lot and making a lot of bad choices and bad impressions, he believed in me. He would sit me down and tell me how I could develop.</p><p>He never tried to make me a better student. It was always about being a better artist and citizen. He would be running between two classes and trips to India and rehearsal and Arts Center administration, and yet somehow miraculously still made the time to check in with every one of us and know we are okay. When we did have a conversation with him, we would leave feeling overwhelmed – there was so much to do and so little time. And yet we knew everything was going to be okay. We had a warm-hearted father figure who would always have our back when we were falling, literally in some physical exercises. He would ask us to fail, keep going, fail again, and of course, “stay in the attempt.” The school assigned Rubén to be my first faculty mentor because I told them I wanted to study literature.</p><p>And then, once I arrived, I was captivated by a visit to the science labs and their aspirations of a holistic science curriculum. I came to Rubén a one-week-old freshman already in crisis about what to study, separate passions tugging at me and unsure of where to turn. And instead of limiting me as I expected, he celebrated that. He told me how his undergraduate studies in chemistry uniquely equipped him for directing and art-making.</p>",
      authors: [
        { $type: "ref", value: ["authorsBySlug", "rend-beiruti"] },
      ],
    },
    "parents": {
      title: "Introduction of College Parents Program at NYUAD",
      image: "/images/parents.jpg",
      slug: "parents",
      issueId: "55",
      category: "news",
      teaser: "This is a sample article description. This is meant to grab the reader's attention. It should be no longer than one hundred & 40 characters.",
      body: "On April 20, the Office of First Year Programming announced the introduction of the College Parents program, in which rising sophomores sign up in pairs to become advisors to a group of four to five students from the incoming freshmen class, to help them with their transition to university life during their first semester in college. 72 pairs of rising sophomores have signed up for the program and each pair will be matched with their group, as soon as the list of the Class of 2020 students is finalized. Pairs will get in touch with their groups in the beginning of the summer and will meet for the first time during Marhaba Week, with a scheduled meet to be held on August 27. The main proponent of the program was Class of 2019 Representative Chris Wheeler, who initially got the idea from a friend studying in the United Kingdom. “There are no expectations or certain demands put for parents as they have the freedom to put as much effort in the program as they want. However, they are encouraged to provide a real perspective of NYUAD, use their personal experiences to give information and tips that cannot be found online and show them some parts of Abu Dhabi,” said Wheeler. “Parents will not be matched from students from their own country. This will prepare new students to interact with different nationalities and will not allow them to establish a higher level of connection with their parent who come from the same country,” he added. A similar program called Brothers and Sisters ran in past years. However, Wheeler expects the newly-developed program to be more successful as he pointed out the difference between the dynamics of both programs. “In the past, incoming freshmen had to sign up for Brothers and Sisters themselves, but now every new student will be assigned to parents automatically. Previously, it was a one-to-one mentoring process, so if a student was not compatible with his/her mentor, he/she [was] not able to reap its benefits. Now, the program focuses on wider engagement as students have two mentors instead of one,” said Wheeler. Freshman Vuk Vukovic spoke about his expectations of the program. “We did not have such a program, so I want to benefit new students. I think the program will be successful and hope that interaction with my partner will be fruitful,” said Vukovic. Freshman Rida Maryam Zafar also wrote to The Gazelle about the importance of the College Parents program. “I think it’s a great idea to get involved in the community and remove the barrier between freshmen and upperclassmen. As an incoming freshman, I had quite a few questions about the university and didn’t really know who I should be talking to and the idea of college parents allows for those questions to be answered, which is great,” she said.",
      html: "<p>On April 20, the Office of First Year Programming announced the introduction of the College Parents program, in which rising sophomores sign up in pairs to become advisors to a group of four to five students from the incoming freshmen class, to help them with their transition to university life during their first semester in college. 72 pairs of rising sophomores have signed up for the program and each pair will be matched with their group, as soon as the list of the Class of 2020 students is finalized. Pairs will get in touch with their groups in the beginning of the summer and will meet for the first time during Marhaba Week, with a scheduled meet to be held on August 27. The main proponent of the program was Class of 2019 Representative Chris Wheeler, who initially got the idea from a friend studying in the United Kingdom.</p><p>“There are no expectations or certain demands put for parents as they have the freedom to put as much effort in the program as they want. However, they are encouraged to provide a real perspective of NYUAD, use their personal experiences to give information and tips that cannot be found online and show them some parts of Abu Dhabi,” said Wheeler. “Parents will not be matched from students from their own country. This will prepare new students to interact with different nationalities and will not allow them to establish a higher level of connection with their parent who come from the same country,” he added.<p></p>A similar program called Brothers and Sisters ran in past years. However, Wheeler expects the newly-developed program to be more successful as he pointed out the difference between the dynamics of both programs. “In the past, incoming freshmen had to sign up for Brothers and Sisters themselves, but now every new student will be assigned to parents automatically. Previously, it was a one-to-one mentoring process, so if a student was not compatible with his/her mentor, he/she [was] not able to reap its benefits. Now, the program focuses on wider engagement as students have two mentors instead of one,” said Wheeler. Freshman Vuk Vukovic spoke about his expectations of the program. <p></p>“We did not have such a program, so I want to benefit new students. I think the program will be successful and hope that interaction with my partner will be fruitful,” said Vukovic.<p></p>Freshman Rida Maryam Zafar also wrote to The Gazelle about the importance of the College Parents program. “I think it’s a great idea to get involved in the community and remove the barrier between freshmen and upperclassmen. As an incoming freshman, I had quite a few questions about the university and didn’t really know who I should be talking to and the idea of college parents allows for those questions to be answered, which is great,” she said.",
      authors : [
        { $type: "ref", value: ["authorsBySlug", "ahmed-meshref"] },
      ],
    },
  },

  authorsBySlug: {
    "ahmed-meshref": {
      name: 'Ahmed Meshref',
      photo: '/images/authors/author.png',
      slug: "ahmed-meshref",
      biography: "This is Ahmed Meshref's biography.",
      articles: [
        { $type: "ref", value: ["articlesBySlug", "parents"] },
      ],
    },
    "rend-beiruti": {
      name: 'Rend Beiruti',
      photo: '/images/authors/author.png',
      slug: "rend-beiruti",
      biography: "This is Rend Beiruti's biography.",
      articles: [
        { $type: "ref", value: ["articlesBySlug", "remembering-ruben"] },
      ],
    },
    "daniah-kheetan": {
      name: 'Daniah Kheetan',
      photo: '/images/authors/author.png',
      slug: "daniah-kheetan",
      biography: "This is Daniah Kheetan's biography.",
      articles: [
        { $type: "ref", value: ["articlesBySlug", "palestine-hamilton"] },
      ],
    },
    "tala-nassar": {
      name: 'Tala Nassar',
      photo: '/images/authors/author.png',
      slug: "tala-nassar",
      biography: "This is Tala Nassar's biography.",
      articles: [
        { $type: "ref", value: ["articlesBySlug", "palestine-hamilton"] },
      ],
    },
  },
};

export default data;