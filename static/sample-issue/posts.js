const data = {
    issues: {
        "76": {
            "pubDate": "2016-08-21T05:58:09.000Z",
            "featured": { $type: "ref", value: ["articlesBySlug", "letter"] },
            "picks": [
                { $type: "ref", value: ["articlesBySlug", "post-grad"] },
                { $type: "ref", value: ["articlesBySlug", "picking-courses"] },
            ],
            "categories": [
                {
                    name: "off campus",
                    slug: "off-campus",
                    articles: [
                        { $type: "ref", value: ["articlesBySlug", "the-ad-secrets-challenge"] },
                        { $type: "ref", value: ["articlesBySlug", "art-in-ad"] },
                        { $type: "ref", value: ["articlesBySlug", "playlist"] },
                    ],
                },{
                    name: "on campus",
                    slug: "on-campus",
                    articles: [
                        { $type: "ref", value: ["articlesBySlug", "dear-freshmen"] },
                        { $type: "ref", value: ["articlesBySlug", "post-marhaba-feels"] },
                        { $type: "ref", value: ["articlesBySlug", "changes-with-marhaba"] },
                        { $type: "ref", value: ["articlesBySlug", "visas"] },
                    ],
                },{
                    name: "commentary",
                    slug: "commentary",
                    articles: [
                        { $type: "ref", value: ["articlesBySlug", "returning-to-nyuad"]},
                        { $type: "ref", value: ["articlesBySlug", "advice-to-incoming-first-years"]},
                        { $type: "ref", value: ["articlesBySlug", "whitewashing-hollywood"]},
                        { $type: "ref", value: ["articlesBySlug", "nyuad-survival-guide"]},
                    ],
                },{
                    name: "in focus",
                    slug: "in-focus",
                    articles: [
                        { $type: "ref", value: ["articlesBySlug", "50-things"] },
                        { $type: "ref", value: ["articlesBySlug", "fixing-a-tire"] },
                    ],
                },
            ],
        },
    },


    trending: [
        { $type: "ref", value: ["articlesBySlug", "50-things"] },
        { $type: "ref", value: ["articlesBySlug", "dear-freshmen"] },
        { $type: "ref", value: ["articlesBySlug", "the-ad-secrets-challenge"] },
        { $type: "ref", value: ["articlesBySlug", "fixing-a-tire"] },
        { $type: "ref", value: ["articlesBySlug", "returning-to-nyuad"] },
        { $type: "ref", value: ["articlesBySlug", "whitewashing-hollywood"]},
        { $type: "ref", value: ["articlesBySlug", "visas"] },
    ],

    categories: {
        "off-campus": {
            name: "off campus",
            slug: "off-campus",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "the-ad-secrets-challenge"] },
                { $type: "ref", value: ["articlesBySlug", "art-in-ad"] },
                { $type: "ref", value: ["articlesBySlug", "playlist"] },
            ],
        },
        "on-campus": {
            name: "on campus",
            slug: "on-campus",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "dear-freshmen"] },
                { $type: "ref", value: ["articlesBySlug", "post-marhaba-feels"] },
                { $type: "ref", value: ["articlesBySlug", "changes-with-marhaba"] },
                { $type: "ref", value: ["articlesBySlug", "visas"] },
            ],
        },
        "commentary": {
            name: "commentary",
            slug: "commentary",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "returning-to-nyuad"]},
                { $type: "ref", value: ["articlesBySlug", "advice-to-incoming-first-years"]},
                { $type: "ref", value: ["articlesBySlug", "post-grad"]},
                { $type: "ref", value: ["articlesBySlug", "whitewashing-hollywood"]},
                { $type: "ref", value: ["articlesBySlug", "nyuad-survival-guide"]},
                { $type: "ref", value: ["articlesBySlug", "letter"]},
                { $type: "ref", value: ["articlesBySlug", "picking-courses"]},
            ],
        },
        "in-focus": {
            name: "in focus",
            slug: "in-focus",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "50-things"] },
                { $type: "ref", value: ["articlesBySlug", "fixing-a-tire"] },
            ],
        },
    },

    // authors: [
    //     { $type: "ref", value: ["authorsBySlug", "khadeeja-farooqui"] },
    //     { $type: "ref", value: ["authorsBySlug", "joey-bui"] },
    //     { $type: "ref", value: ["authorsBySlug", "jamie-sutherland"] },
    //     { $type: "ref", value: ["authorsBySlug", "karolina-wilczynska"] },
    //     { $type: "ref", value: ["authorsBySlug", "the-gazelle-staff"] },
    //     { $type: "ref", value: ["authorsBySlug", "tessa-ayson"] },
    // ],

    // teams: [
    //     {
    //         name: "management",
    //         members: [
    //             { $type: "ref", value: ["authorsBySlug", "ahmed-meshref"] },
    //             { $type: "ref", value: ["authorsBySlug", "rend-beiruti"] },
    //         ],
    //     },{
    //         name: "editorial",
    //         members: [
    //             { $type: "ref", value: ["authorsBySlug", "rend-beiruti"] },
    //             { $type: "ref", value: ["authorsBySlug", "daniah-kheetan"] },
    //         ],
    //     },{
    //         name: "staff",
    //         members: [
    //             { $type: "ref", value: ["authorsBySlug", "daniah-kheetan"] },
    //             { $type: "ref", value: ["authorsBySlug", "tala-nassar"] },
    //         ],
    //     },
    // ],

    infoPages: {
        "about": {
            title: "About",
            html: "<p>The Gazelle is a weekly student publication, founded by Alistair Blacklock and Amanda Randone in 2013, serving the NYU Abu Dhabi community and the NYU&#8217;s greater global network. The Gazelle allows its undergraduate writers and photographers to cover campus and local news and is published online.</p> <p >The Gazelle is run solely by current undergraduate students. The editors are committed to operating as editorially and financially independent of the university. The Gazelle is an online platform available to the public because the editors believe students interested in professional journalism will not settle on publishing their work when they cannot share it, via social media or email, with people outside the institution. The editors believe that a thoughtful, structured and self-consciously public publication will provide this while creating a framework for constructive discourse. This is the best medium for hosting student voices, stories and ideas than alternative forms of publication. At a time when anyone can publish their work online we see it not only important but vital that students do so collectively.</p> <p>Opinions expressed in The Gazelle are by editors or columnists and are not those of The Gazelle. Unsigned editorials are all the collective opinion of the Editorial Board. The Gazelle encourages readers to voice their opinions respectfully. Comments are not pre-moderated, but The Gazelle reserves the right to remove comments if deemed to be in violation of this policy. Comments should remain on topic, concerning the article or blog post to which they are connected. Brevity is encouraged.</p> <p>A comment will be deleted if:</p><ul><li>The comment attacks a named or identified person or group unreasonably,</li><li>The comment makes readers unreasonable uncomfortable on the basis of one’s race, gender, religion, disability, ethnicity or otherwise,</li><li>The comment attacks personally any NYUAD or Gazelle staff,</li><li>The comment contains excessive obscenities,</li><li>It is determined that the comment is made under a false name or uses another person’s name or email address,</li><li>The comment threatens or encourages violence,</li><li>The comment encourages illegal behavior,</li><li>The comment violates copyright or privacy protections,</li><li>The comment contains personal information,</li><li>Or the comment is completely off-topic or determined to be spam</li></ul>",
        },
        "ethics": {
            title: "Code of Ethics",
            html: '<p>The Gazelle follows a code of ethics to ensure fair and accurate journalism is practiced in accordance with the laws of the UAE. The following is adapted from the <a href="//gulfnews.com/about-gulf-news/help/code-of-ethics-1.446056"> Code of Ethics of the Gulf News</a> and the UAE journalism code of ethics:</p><ol><li ><p >Respect the truth and the right of the public to have access to truthful and accurate information.</p></li><li ><p >While performing his or her duty, the journalist is demanded to commit at all times to the principles of freedom and integrity in gathering and publishing stories. He or she should also voice fair and neutral comments and criticism.</p></li><li ><p >A journalist must only publish facts from known sources, and must not hide any basic or important information, forge facts or falsify documents.</p></li><li ><p >He or she should use only legitimate means to obtain information, photos and documents from original sources.</p></li><li ><p >Journalists should undertake to rectify any published information that proved to be false.</p></li><li ><p >There should be no compromise in credibility.</p></li><li ><p >Journalists should respect the privacy of individuals. If personal conduct conflicts with public interest, such conduct may be covered without violating the privacy of uninvolved individuals, to the extent that this is possible.</p></li><li ><p >In regards to sources, the code and charter stress that professionalism and confidentiality should be strictly observed if the source demands anonymity.</p></li><li ><p >Journalists should not seek to provoke or inflame public feelings by any means, or use means of excitement and deception or dishonest reporting. They should not use media for the purpose of libel or slandering.</p></li><li ><p >The edited publications should not be influenced by personal interests or businesses with a third party. Publishers and editors-in-chief must turn down any such attempts, and draw a clear line between reported stories and commercial articles or publications.</p></li><li ><p >Journalists should be very vigilant to traps of discrimination and avoid involving themselves by any means in any stories hinting to discrimination of race, sex, language, faith or national and social backgrounds.</p></li><li ><p >Journalists must strive to be impartial in reporting and avoid conflicts of interest with their stories.</p></li><li ><p >The media should refrain from publishing photos that are very graphic or violent in nature.</p></li><li ><p >Journalists are urged to avoid using obscene or offensive language in their reports.</p></li><li ><p >Islam is a basic and important component of UAE culture, values and traditions, and the respect of religious and traditional values is crucial for sensitive publishing.</p></li><li ><p >Human rights should be respected and valued by the media.</p></li><li ><p >Plagiarism, ill-intention interpretation, libel, slandering, censure, defamation, allegation and accepting bribery to publish or hide information are all dangerous professional violations.</p></li><li ><p >When using facts found in news publications, journalists must give credit to the original publication.</p></li><li ><p >Competing for news, pictures and information is a right, provided practicing such competition is honest and clear and does not hinder the work of colleagues in competing publications.</p></li><li ><p >A journalist has to do his or her best not to become part of a story, and to cover news not make it. While gathering information, a journalist may not present himself as anything other than a journalist.</p></li><li ><p >Journalists must not acquire information or pictures through harassment, temptation or violence.</p></li><li ><p >Accepting valuable cash and kind gifts may cause a journalist to be biased in his coverage and is considered a breach of the code.</p></li></ol><p><em>Published March 2013. Updated January 2014.</em></p>',
        },
    },

    // "sample": {
    //     "authors": [
    //         { $type: "ref", value: ["authorsBySlug", "author"] },
    //     ],
    //     "featuredImage": "",
    //     "html": "",
    //     "published_at": "2014-08-30T05:58:09.000Z",
    //     "slug": "",
    //     "title": "",
    //     "issueId": "76",
    //     "category": "",
    //     "teaser": "",
    // },

    articlesBySlug: {
        "50-things": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "khadeeja-farooqui"] },
                { $type: "ref", value: ["authorsBySlug", "joey-bui"] },
                { $type: "ref", value: ["authorsBySlug", "jamie-sutherland"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2014/03/kids-860x430.jpg",
            "html": '<p><video autoplay="autoplay" loop="loop"><source src="//s3.amazonaws.com/gazelle_ad/freshman-issue/08_31_FEATURES_50Things.mp4" type="video/mp4" /><source src="//s3.amazonaws.com/gazelle_ad/freshman-issue/08_31_FEATURES_50Things.ogg" type="video/ogg" /><object codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="//www.thegazelle.org/wp-includes/js/tinymce/plugins/media/moxieplayer.swf" /><param name="flashvars" value="url=//s3.amazonaws.com/gazelle_ad/freshman-issue/08_31_FEATURES_50Things.mp4&amp;poster=/wp-admin/" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="true" /><embed type="application/x-shockwave-flash" src="//www.thegazelle.org/wp-includes/js/tinymce/plugins/media/moxieplayer.swf" flashvars="url=//s3.amazonaws.com/gazelle_ad/freshman-issue/08_31_FEATURES_50Things.mp4&amp;poster=/wp-admin/" allowfullscreen="true" allowscriptaccess="true" /></object></video><br /><em>Video by Megan Eloise/ The Gazelle</em></p><em>Editor’s Note: This article was originally published on August 30, 2014.</em><p></p><p>Dear Class of 2018,</p><p>There is no way to go through college without making mistakes. But even as we continue to change majors overnight, miss Skype dates with old friends and plead with airline officials to let us take those extra few kilograms on board, we still learn a lot along the way. Taking a cue from <a href="//mitadmissions.org/blogs/entry/50_things">Massachusetts Institute of Technology’s Office of Admissions Blog</a>, here is some advice, from three generations of NYU Abu Dhabi students, so you can make all the right mistakes, but none of the wrong ones.</p><ol><li>Have confidence. You are here for a good reason, even if you don’t know what that is yet.</li><li>But don’t get cocky. You have a lot to learn, young grasshopper.</li><li>Explore the city. If Abu Dhabi seems limited to you, then it is up to you to look further.</li><li>Countless shops sell chai for 1 AED. These one dirham cups save lives and grades.</li><li>So does hummus.</li><li>Tread carefully with dokha. Look up its health effects or ask somebody. Preferably multiple, well-informed people.</li><li>Visit the gym. The freshman 15 is not a myth.</li><li>Your body is a temple — even on Thursday nights.</li><li>Try to make Emirati friends.</li><li>If you haven’t already, seriously consider learning Arabic.</li><li>Take a position on the Oxford comma and defend it to the death.</li><li>Invest in a backpack. You will travel more than you think you will.</li><li>But don&#8217;t feel like you have to leave the country every break.</li><li>Join in. Find a Student Interest Group or start a new one.</li><li>Invest, don’t spectate. You’ll always remember the chants on the bus after a dragon boat victory or your first Open Mic performance.</li><li>College comes with new independence but you don’t have to compromise your values. If partying is not your thing, do not feel like you still have to be intoxicated on Friday mornings.</li><li>Similarly, you do not have to do an internship or work in the summer just because your friends are.</li><li>Learn from your peers — don’t be intimidated or disheartened by their successes. Many of us are only pretending to have our lives together.</li><li>We are all nerds here. Don’t be afraid to show what you love.</li><li>Don’t expect everything to fall into place for you. Fight for it, or decide to fight for something else.</li><li>Talk to your professors about papers, grades and life.</li><li>Global Academic Fellows do help.</li><li>Help will always be given at NYUAD to those who ask for it. Your peers may be some of the greatest people you will ever meet and we’re all in the same boat.</li><li>Turn up on time.</li><li>It is okay to be placed into Math Functions or Analysis and Expression. Do not make it a matter of hurt ego or lost pride. Foundational courses are often advantageous.</li><li>FRESHMAN YEAR GRADES DON&#8217;T COUNT. Sort of. If you’re worried, ask a grown-up, not Facebook.</li><li>That said, the aforementioned policy is no reason to not take your academics seriously. Challenge yourself always.</li><li>When NYUAD says diverse, it means diverse. Do not assume people&#8217;s religious, social or cultural backgrounds. More disputes arise because of assumptions than actual facts.</li><li>Do not make assumptions about people’s financial support packages either.</li><li>Respect differences. You do not have to change your mind or change somebody else’s mind, but you do have to learn how to live with these differences.</li><li>Listen.</li><li>You do not have to be a global leader, despite what all the press releases say.</li><li>Do not leave clothes for too long in the washers or dryers. Others won’t thank you for it and things go missing.</li><li>Staying up all night to finish that paper is not a badge of honor. Take pride in managing your time well.</li><li>Do what you say you’ll do. Show up. If you really can’t come, apologize profusely and let the organizers know in advance.</li><li>Take photos, make videos, write jokes and conversation — twenty years later, you will want to remember college.</li><li>Be silly. Build pillow forts at midnight and bake a cake every Saturday. You’ll remember the silliness when all the seriousness has faded away.</li><li>Take part in the 24 Hour Film Race. Our university is small enough that you can do things you’re not trained to do without judgement. So you’ve never taken a film class in your life? Who cares. Make a mockumentary about your pet goldfish.</li><li>Invest in quality speakers, an enormous blanket or a good saucepan. Have something that is yours and makes your room a home. Just make sure it fits in your storage box.</li><li>Once in a while send a letter or a postcard to your parents, teacher or best friend.</li><li>Friendships aren&#8217;t static, especially when you&#8217;re separated by thousands of miles. Be okay with that.</li><li>Let yourself change too. Don’t think too much about the past and focus on moving forward.</li><li>Be proud of who you are and where you come from.</li><li>Romantic relationships are mysterious things. We recommend a trial and error approach — you’re young.</li><li>Be prepared to defend Abu Dhabi and the Middle East against Orientalism for the rest of your life.</li><li>Long distance relationships are difficult and you will need to go the extra mile. Be brave enough to cut loose when it&#8217;s not working out.</li><li>NYUAD is our community and our unfinished creation. Be proud of it.</li><li>And don’t be afraid to fix it where it needs fixing.</li><li>Ignore all of us upperclassmen and other people who tell you what you just have to do at college. It’s your four years, and you’re welcome to disregard as many acronyms as you like: FoS, FoMST, JSTOR, FOMO, TL;DR, GPA, FML, YOLO.</li><li>You&#8217;ll fall asleep on sand dunes, wake up in Kathmandu’s valleys, argue about imperialism, nationalism and Orientalism over shisha late into the night, love somebody from the other side of the world and get so lost along the way. Remember how lucky you are and be thankful.</li></ol><p><em>Khadeeja Farooqui is features editor. Email her at khadeeja@thegazelle.org.</em></p><p><em>Joey Bui is an editor-at-large. Email her at news@thegazelle.org.</em></p><p><em>Jamie Sutherland is a contributing writer. Email him at editorial@thegazelle.org</em></p>',
            "image": null,
            "published_at": "2014-08-30T05:58:09.000Z",
            "slug": "50-things",
            "title": "50 Things Every NYUAD Freshman Should Know",
            "issueId": "76",
            "category": "on-campus",
            "teaser": "Make all the right mistakes, but none of the wrong ones.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "fixing-a-tire"] },
                { $type: "ref", value: ["articlesBySlug", "dear-freshmen"] },
            ],
        },
        "fixing-a-tire": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "zoe-hu"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2014/03/08_31_FEATURES_FixTyre.jpg",
            "html": '<p><img class="size-full wp-image-65291" src="//thegazelle.s3.amazonaws.com/gazelle/2014/03/08_31_FEATURES_FixTyre.jpg" alt="Illustration by Megan Eloise/The Gazelle" width="1200" height="599" /></p><p class="wp-caption-text"><em>Illustration by Megan Eloise/The Gazelle</em></p></div><p><em>Editor’s note: This article was originally published on August 30, 2014.</em></p><p>I knew something was wrong even before the light started blinking.</p><p>My car had gone over the pothole. The traitorous front tire had jumped over the ridge — there was a moment of weightlessness, a strange gravitational hiccup — and then we had landed back to earth with a<i> boom, kerthud, thunkthunkthunk. </i>The sounds were magnificent and terrifying. The accident was worth the onomatopoetic value alone.</p><p>And now my car was rebelling, steering wheel shuddering, strange things happening to the overall equilibrium of the vehicle. And there was that light on my dashboard — a bright blinking &#8216;uh-oh.&#8217; Like a sullen teenager, my car was acting up. We were in automotive mutiny, and I was in southeast Detroit with a flat tire.</p><p>The terrain of Michigan roads is frequently cracked and pock-marked and moon-like. Potholes are to be expected. But flat tires — like appendectomies and delayed flights and other inconveniences that are too stupid and mundane to ever happen to you, only to other people — are not.</p><p>And yet. Here I was. On Mack Avenue, with my front tire punctured and a feeling that could only be described as wilt-y inside my chest.</p><p>I don&#8217;t quite remember what my thought process had been at that moment. I don’t think there had been a thought process actually, just grappling, fumbling denial and a blank swipe of panic and the most creative swearing I&#8217;d done in years. After all, there aren&#8217;t many nice places to have a flat tire, but southeast Detroit is definitely not one of them.</p><p>Sweaty, praying and steadily ignoring the insistent <i>flapflapflap </i>of tire rubber against ground, I drove down Mack, past the abandoned houses and the lots sprouting weeds and bottle shards. The car and I somehow limped to safer territory, coming to a wounded, dignified stop at a Shell gas station.</p><p>My mind had cleared enough for me to realize what was happening. This was a flat tire. This was adulthood.</p><p>—</p><p>When you are a teenager, a car means mobility, freedom and the breathless breaking of curfew. My first car was a Ford Escape, and our love affair can be gleaned from the candy wrappers I’d leave on its seats, the abandoned books in the backseat, the scuff of my friends&#8217; shoes on the dashboard. As a teenager, your car is a space carved out just for you and, seated before the steering wheel, you are quite physically and emphatically in control. It is not complete ownership — unless your parents are cruel and into weird stuff like “building character” and “learning the true value of things,” you probably have not paid for the car yourself. But, it is still something.</p><p>It is power without the tacked-on asterisk of responsibility. Independence, but not full abandonment. I suspect the affection I feel for my first car doesn’t have much to do with cherished high school memories so much as the fact that I was not paying for my own gas at the time.</p><p>When you are an adult, however, a car means something else. You must feed it, clean it, and care for it. It shuttles you back and forth from home to work. You have to give rides. You have to pay for parking. And occasionally, things like flat tires and oil changes and speeding violations, things that you never prepared for because someone else was always there to know what to do — they happen. They suck.</p><p>I had decided that I would handle this flat tire like an adult, and in my strange brain, this translated into hiding the entire ordeal from my parents and doing everything to conceal that it had ever happened in the first place. There were steps to be taken — I had to get home, I had to change the tire, I had to see if I had the money to change the tire — but all of this, I inexplicably decided, needed to take place without my mother ever finding out.</p><p>My newfound conviction was somewhat enforced, and made easier, by the fact that my mother was not in town at the time and I was instead staying at her friend Sharon&#8217;s. But Sharon could not know about the flat tire either, because I knew that once Sharon found out, my mother would too, thanks to the secret and nefarious Mom Network of communication that extends, bewilderingly, between all those who have gone through childbirth. So, I resolved to lie. </p><p>Were unnecessary fabrications and subterfuge the adult way to go about things? Who knows? It certainly made the situation a lot more difficult and complicated than it had to be, so that leads me to answer yes.</p><p>I staunchly stood by this resignation to noble and martyr-like independence until I realized that I needed a ride home from the gas station. Then, I frantically called all my friends on my contact list and begged them each to come pick me up. By that point, however, it’d become apparent that everyone I knew had secretly met earlier that day and conspired to all get sick or leave town or have work at the same time. No one could pick me up.</p><p>This severely complicated the situation. It was too bad I couldn’t call Sharon.</p><p>—</p><p>Not quite knowing what else to do, I phoned a mechanic and was put on hold for half an hour of foot-tapping and the same elevator-music played in a never-ending tinny loop. A nice woman named Mandy finally picked up, and I explained to her my situation. She said that the tire could be taken out, and a new one put in its place very easily. I would just have to wait until the following morning for the repair.</p><p>Cringing, I asked Mandy how much the operation would cost.</p><p>&#8220;Around 275 dollars,&#8221; said Mandy.</p><p>&#8220;275 dollars?&#8221; I repeated.</p><p>&#8220;Yes,&#8221; said Mandy. “275 dollars.”</p><p>There was a long pause over the phone.</p><p>&#8220;Okay,&#8221; I croaked. &#8220;Okay. We&#8217;ll make it work.&#8221;</p><p>275 dollars. This was good news for the car, not-so-good news for the bank account. The prospect of parental financial support was a tempting, fleeting thought, but asking for money would entail confessing to my mom what had happened. And I couldn’t do that if I wanted to be a real, mature adult. I would have to pay on my own.</p><p>Mandy and I could do this. The tire would be fixed.</p><p>—</p><p>After the necessary agreements and the painful extraction of my credit card information over the phone, I hung up knowing there still remained another tricky problem: waiting. I somehow had to survive from now until the next morning when I could pick up the car, without anyone finding out what had happened or Sharon noticing the mysterious disappearance of a 2,700-pound vehicle from her driveway.</p><p>Luckily, a friend took pity on me and let me stay the night at her house. This seemed like a good plan. I could leave the car at the shop, I reasoned, then pick it up in the morning and no one would be the wiser. After texting Sharon to tell her I wouldn’t be sleeping at home, I received a rather dismaying response from her a couple minutes later:<i> &#8220;Thx. Is your car with you?&#8221;</i></p><p>My web of lies was slowly unravelling. I turned off my phone.</p><p>The next day, I spent the morning being an annoying burden to my friend while we waited for my car to be repaired, her obligingly shuttling me from point A to point B, me feeling oddly helpless and infantile.</p><p>This was the true epitome of adulthood, I realized: having control and freedom, then seeing it taken away from you and being responsible for figuring out — on your own and very much alone — how to get it back. A swamp of arrangements, phone calls, bills and inconveniences to wade through. A flat tire and a sad bank account.</p><p>The realization that you are struggling more than you should be and the vague, heady fear that someone else might notice.</p><p>—</p><p>In college, one encounters many flat tires, except instead of being called flat tires, they are called visa applications or broken air-conditioners or the flu. These things may look familiar, may have happened before, but they will be different in that now no one is there to help solve the problem. Without your parents, counselors, teachers and friends, you must grapple with it on your own.</p><p>Having this newfound but familiar responsibility feels a bit like waking up in your old bedroom, the same one you have slept in for years, only to discover that overnight on your eighteenth birthday, someone has painted all the walls a different color. You feel surprised and betrayed and somewhat annoyed that no one first bothered to consult you with paint swatches.</p><p>I had the flat tire fixed, and I drove my car to work the next morning with a strange sensation familiar to many college students — a feeling of accomplishment tinged with the uneasy suspicion that everything probably could have resolved itself in a much different, much easier way. In adulthood, there is always that mythical easy way. You don’t know what it looks like, all you know is that it exists and it is evading you.</p><p>Looking back, I think I know what my easy way was.</p><p>I could have called my mom. I could have asked for help, could have borrowed the money, could have come clean to Sharon. But because my strange brain had conflated being mature with being infallible, I’d instead insisted on concealing the flat tire and causing myself a lot of mental, emotional and financial anguish in the process.</p><p>Successful adulthood means being someone who can calmly go about fixing a flat tire, even if that involves asking other people for help. Yet I had believed it meant being someone to whom flat tires never happened in the first place. How stupid, I can’t help but think in hindsight. How proud.</p><p>Maturity is not infallibility. And while independence is important, you don’t have to ostracize yourself to live the illusion of a perfect, put-together life. It is okay to call home sometimes, especially if you’re struggling. You don’t have to accept money from others, you don’t even have to let them help you. But you can call and complain. Sometimes, the few words of sympathy you will hear in response are enough.</p<p><em>Zoe Hu is an editor at large. Email her at zoe@thegazelle.org.</em></p>',
            "image": null,
            "published_at": "2014-08-30T05:58:09.000Z",
            "slug": "fixing-a-tire",
            "title": "Fixing A Tire",
            "issueId": "76",
            "category": "in-focus",
            "teaser": "We were in automotive mutiny, and I was in southeast Detroit. This was a flat tire. This was adulthood.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "50-things"] },
                { $type: "ref", value: ["articlesBySlug", "advice-to-incoming-first-years"] },
            ],
        },
        "dear-freshmen": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "tessa-ayson"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2015/09/TSP.jpg",
            "html": '<p><img class="wp-image-123771 size-full" src="//thegazelle.s3.amazonaws.com/gazelle/2015/09/TSP.jpg" alt="TSP" width="699" height="323" /></p><p class="wp-caption-text"><em>Graphic by Megan Eloise/The Gazelle</em></p><p><em>Editor’s Note: This article was originally published on September 12, 2015.</em></p></div><p>Welcome to college. You will most likely learn more in the next four years than you’ve ever learned in your life. You will traverse countries and cultures and politics and rivers and seas and bridges and mistakes and mindsets. In response to all that traversing, you may realize where your feet are actually planted in this world, or where you want them to be: you may sow yourself, and water your roots until you spread a fine network of root-hair through your precise patch of soil on this Earth. Or, you may become terrified of the very prospect of roots: you may shift with the seasons, as we tend to, a seed borne by summer breezes in a constant state of flux. Both options will leave you with a lot of questions, and many of them you will never resolve. Welcome to that.</p><p>On the subject of roots, remember that the only plants that take root here are very hardy; take care not to let your cactus spikes grow too sharp, because it is easy to have that happen. It is easy to become defensive and thicken your skin to avoid the sunlight and stares of Abu Dhabi. Try not to let that thick skin become too calloused.</p><p>Always remember that you are living in an incredibly unique situation, and when the thought of that or of the glittering city becomes too much, go and stick your toes in the waves and remember that seawater is the same everywhere.</p><p>Try to learn by doing, and not by hearing — it’s okay to make the same mistakes as everyone else, since you never know how hot the stove is until you touch it, and nobody can understand your experiences quite like you yourself can.</p><p>When you go home for your first winter break, treasure it. Mostly, it’s the first and only time you’ll feel like you’re coming back home after a long holiday. Sometimes people’s welcome-home hugs still stretch right around you, able to fully embrace your new-found growth, but often they do not. Often you will be like a tree trunk whose breadth just eludes a child’s grasping finger-reach, and that will be hard. When you leave home, you tend to realize who your true friends are. They may surprise you; go with your instincts, but also don’t be afraid to let go.</p><p>Life is frequently hard to explain, but ours particularly so; you’ll develop an often-required repertoire of vocabulary, a series of flashcards that you can use almost without thinking: “It’s-hot/no-I-don’t-wear-a-burka/yes-there-are-women/no-they’re-not-oppressed/10%/abu-dhabi-not-abu-dubai”, etc, etc. People often have the same curiosities, which means you’ll need more or less the same answers, but take the chance to surprise them and be honest. You’ll probably turn into an avid anti-Orientalist within a few months anyways.</p><p>At some point during college, you’ll realize that you no longer live at home. It took me a year. Then, you will start to wonder a whole bunch of other things and you’ll be surrounded by hundreds of other people all questioning the same sorts of questions and there’ll be a kind of exhilarating delight in that bewildering climate of existential confusion. Don’t get too caught up in the existentialism question though, unless you genuinely want to study it. Our life is complicated enough without confronting the question of whether the world has meaning.</p><p><em>Tessa Ayson is features editor. Email her at feedback@thegazelle.org. </em></p>',
            "image": null,
            "published_at": "2015-09-12T05:58:09.000Z",
            "slug": "dear-freshmen",
            "title": "Dear Freshmen",
            "issueId": "76",
            "category": "commentary",
            "teaser": "Welcome to college. You will traverse countries and cultures and politics and rivers and seas and bridges and mistakes and mindsets.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "post-marhaba-feels"] },
                { $type: "ref", value: ["articlesBySlug", "changes-with-marhaba"] },
            ],
        },
        "post-marhaba-feels": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "karolina-wilczynska"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2015/09/Daniel-1200x594.jpg",
            "html": '<p><img class="wp-image-123631 size-medium" src="//thegazelle.s3.amazonaws.com/gazelle/2015/09/Daniel-1200x594.jpg" alt="Daniel" width="1200" height="594" /></p><p class="wp-caption-text"><em>Illustration by Daniel Obaji/The Gazelle</em></p></div><p><em>Editor’s Note: This article was originally published on September 12, 2015.</em></p><p>In the short time between the university’s Marhaba orientation program and its annual RealAD show, freshmen are given exactly two weeks to experience and explore NYU Abu Dhabi for the first time.</p><p>Representing over 70 countries, NYUAD&#8217;s latest cohort of freshmen is poised at the beginning of an exciting four years. But Marhaba week presents its own challenges and, whether anticipated or not, they can make the first semester at university a difficult adjustment.</p><p>The NYUAD Confessions Page, an online Facebook page where students <a href="//www.facebook.com/NYUAD-Confessions-Page-250320155116643/timeline/">share</a> their thoughts and secrets, has published several anonymous posts about the initial troubles of university life.</p><p>Upset by a perceived inability to connect with new peers, one unnamed freshman wrote about their feelings of loneliness and seclusion. &#8220;I see everyone else planning to go places together and sharing inside jokes, and it just makes me feel a bit like an outsider,&#8221; they wrote.</p><p>The post drew attention from fellow NYUAD students, attracting likes and comments of support.</p><p>Dr. Anita Tieman, a counselor at NYUAD, was not surprised by the student’s struggle to feel a part of the community, especially after the initial frenzy of Marhaba.</p><p>“[Freshmen] had this orientation, where everything was about excitement and getting to know things and learning about new people,” Tieman said. “And all of a sudden you don’t have the same things that brought you together. And so I think everyone experiences this kind of let-down from that initial excitement.”</p><p>This sentiment resonated with other students who had difficulty transitioning from Marhaba to regular university life.</p><p>Junior Ieva Liepuoniute, when asked about her impressions of Marhaba, said the shift could be a somewhat traumatizing one.</p><p>“You were doing all these social things, and now you have to do academics and there is so little time left for social things,” she said.</p><p>She said that the connections she made during Marhaba week weren’t necessarily friendships, but rather temporary acquaintances.</p><p>Friendships, she explained, began to form as people went to classes, joined Student Interest Groups and realized they shared common, more substantial interests.</p><p>“At the end of the day, it’s a long process, and it requires a lot of effort. It’s like academics: the more you study, the more you get out of it,” said Liepuoniute, who re-lived Marhaba last year as an RA for a freshman floor.</p><p>Senior Devin Ó Cuinn noticed that there are exceptions to the rule, such as <a href="//www.thegazelle.org/issue/66/features/marhaba-couples/">couples</a> who get together during Marhaba and last for years. But it is important to realize that usually, both friendships and relationships take time to form.</p><p>Ó Cuinn added that a lot of people, including himself, remember sometimes feeling lonely during freshman year, especially in the beginning.</p><p>“You are completely displaced, in a lot of ways, from everything that you’ve ever done. It’s a big change from high school. It’s also a kind of culture shock for many people,” said Ó Cuinn.</p><p>The excitement of Marhaba and the slowdown that follows can be disorienting, but sophomore and Marhaba organizer Roman Kohut saw the pace as a necessary element of the week.</p><p>“Had Marhaba been done in a more relaxed sort of way, there wouldn’t be a need for [freshmen] to come a week earlier,” said Kohut. “The purpose of it was to make sure that they got to know the deans, got to know the place &#8230; and that all takes time. That’s why [the week] was so packed.”</p><p>Since attending Marhaba is obligatory, students may need to find their own strategies to ease smoothly into the rest of the semester. Apart from the standard wellness services provided by the university, Tieman believes in the power of what she calls “managing one’s mood.”</p><p>As students mature and take responsibility for their own lives, Tieman explained, they also need to figure out what it is that will make them personally feel better, whether that’s talking to someone back home or simply attending the SIG Fair in search of new activities and clubs to join.</p><p>According to Tieman, even though freshmen can be most affected, everyone feels social stress and loneliness at times of significant change, like during study abroad. She suggested that an important technique in combating these feelings is to learn positive self-talk.</p><p>“Part of it is turning the words [in our heads into]: I’m not isolated, I’m just lonely today. So how do I go and not be lonely?’” she said.</p><p>Ó Cuinn also advocated taking time to leave Saadiyat every once in a while.</p><p>“I think if you don’t get out to the city in the first couple of weeks, it’s very hard to get out after,&#8221; he said. &#8220;And I think that’s something that can contribute to this isolating feeling as well.&#8221;</p><p>As a member of REACH, a peer support group on campus, Ó Cuinn is also involved in organizing a series of informal meetings for freshmen. The first took place last Wednesday, and another will be held a week later.</p><p>Liepuoniute, as a former RA, stressed the importance of reaching out to others.</p><p>“Talk to RAs, because we get trained for situations like that and we can really give advice,” she said, adding that she had been a strong proponent of facilitating connections between freshmen on her floor.</p><p>“Don’t get takeaway,” she added. “Go to the cafeteria and talk to people you have never talked to before, even if it’s awkward &#8230; Life is so much better all of a sudden.”</p><p><em>Karolina Wilczynska is deputy features editor. Email her at feedback@thegazelle.org.</em></p>',
            "image": null,
            "published_at": "2015-09-12T05:58:09.000Z",
            "slug": "post-marhaba-feels",
            "title": "Dealing With The Post-Marhaba Comedown",
            "issueId": "76",
            "category": "on-campus",
            "teaser": "Transitioning into real life.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "changes-with-marhaba"] },
                { $type: "ref", value: ["articlesBySlug", "visas"] },
            ],
        },
        "the-ad-secrets-challenge": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "the-gazelle-staff"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2015/09/SECRETS-FINAL-1200x599.jpg",
            "html": '<p><em>Editor’s Note: This article was originally published on August 30, 2014.</em></p><p>Though it&#8217;s only a taxi ride away, Abu Dhabi and its knots of streets, alleyways and superblocks — most of which probably don&#8217;t have addresses — can sometimes feel intimidating. But for freshmen and returning students alike, the Eid break offers the opportunity to get out and explore. </p><p>If you&#8217;ve been hoping to familiarize yourself with the city but are unsure where to start, check out the masterlist of The Gazelle&#8217;s series AD Secrets, which covers the lesser-known nooks of the city. </p><p>Grab a friend, grab a taxi and see how many destinations you can tick off before classes resume. </p><p><div class="big-image"> <a href="//thegazelle.s3.amazonaws.com/gazelle/2015/09/Wheat_NicoleLopezDelCarril_5.jpg"><img src="//thegazelle.s3.amazonaws.com/gazelle/2015/09/Wheat_NicoleLopezDelCarril_5.jpg" alt="Nicole Lopez del Carril/The Gazelle" width="800" height="533" class="size-full wp-image-128601" /></a> </div><em>Nicole Lopez del Carril/The Gazelle</em></p><h3>FOOD FOR THOUGHT</h3><ul><p>Try <a href="//www.thegazelle.org/issue/38/features/ad-secrets-agemono/">halo-halo</a>, a popular Filipino dessert of shaved ice and jello, at Agemono. </p><p>Go for mango lassis and people-watching at <a href="//www.thegazelle.org/issue/34/features/ad-secrets-salaam-bombay/">Salaam Bombay</a>. </p><p>Splurge for all you-can-eat sushi at <a href="//www.thegazelle.org/issue/61/features/ad-secrets-4/">Aquarium</a>, a seafood restaurant overlooking the Yas Marina. </p><p>Visit locally-owned<a href="//www.thegazelle.org/issue/22/features/ad-secrets-grand-central/"> Grand Central</a> and order the first, and possibly only, cheese steak in the UAE. </p><p><a href="//www.thegazelle.org/issue/24/features/secrets/">WhEAT</a> offers freshly-baked bread  and a range of cakes, all less than 15 AED. Make sure to taste their Turkish coffee ice cream. </p><p>Back from a semester in New York and missing your morning bagel? Check out the <a href="//www.thegazelle.org/issue/18/features/ad-secrets-the-bagel-bar/">Bagel Bar</a>.  </p><p>Lebanese manakeesh — flat breads loaded with cheese, zataar and other tasty flavors — is especially good at the somewhat obscure <a href="//www.thegazelle.org/issue/25/features/farah/">Al Farah Pastry and Grill</a>.</p><p><a href="//www.thegazelle.org/issue/32/features/48441/">The Cheese &#038; Pickles Centre</a> sources the strongest flavors of the Mediterranean, from Egyptian cheese to Italian salami. Check out their 40 different kinds of olives.  </p><p><a href=" //www.thegazelle.org/issue/64/features/ad-secrets-6/">The Raw Place</a> is possibly one of the best destinations in Abu Dhabi for a healthy treat. Sample their chia pudding and cold-pressed juice. </ul><p><div class="big-image"><img src="//thegazelle.s3.amazonaws.com/gazelle/2015/09/books_self_long-600x312.jpg" alt="Photo by Nicole Lopez del Carril/The Gazelle" width="600" height="312" class="size-full wp-image-128581" /></div><em>Nicole Lopez del Carril/The Gazelle</em></p><h3>GO WANDERING</h3><ul><p>Bring a picnic and go for a stroll through Abu Dhabi&#8217;s scenic <a href="//www.thegazelle.org/issue/27/features/mangroves-2/">mangroves</a>.</p><p>Explore Iranian spices, loose Moroccan tea and oils from Pakistan at <a href="//www.thegazelle.org/issue/11/features/secrets901/">Wadi A’z Zafran</a>.  </p><p>Room feeling bare? Buy a bromeliad from the <a href="//www.thegazelle.org/issue/14/features/ad-secrets-souk/">plant souk</a>. </p><p>Buy some burgers and veggies, and go for a grill at <a href="//www.thegazelle.org/issue/23/features/secretspark/">Khalidiya Park</a>.</p><p>At the <a href="//www.thegazelle.org/issue/39/features/womens-handicraft-centre/">Women&#8217;s Handicraft Centre</a>, you&#8217;ll find hand-crafted fabrics, weaved carpets and beaded jellabas. </p><p>Put away your class readings and buy yourself a novel for the break at Abu Dhabi&#8217;s <a href="//www.thegazelle.org/issue/15/features/ad-secrets-books/">only used bookstore</a>.</ul><h3>SUGAR FIX</h3><ul><p>Go for Italian hot chocolate at <a href="//www.thegazelle.org/issue/44/features/ad-secrets-3/">Maya La Chocolaterie</a>. </p><p><a href=" //www.thegazelle.org/issue/30/features/albaba-secrets/">Al Baba Sweets</a> offers the best delicacies from the streets of Lebanon. They also serve homemade ice cream bars, which you can get dipped in chocolate.</p><p>Become a honey connoisseur for a day, and browse through all the different colors, flavors and consistencies at <a href="//www.thegazelle.org/issue/31/features/queenhoney/">Food Queen Honey</a>. </p><p>Have the perfect <a href="//www.thegazelle.org/issue/20/features/ad-secrets-dates/">date</a> at this cheap Mina Port souk.</ul><p><div class="big-image"><img src="//thegazelle.s3.amazonaws.com/gazelle/2015/09/SECRETS-FINAL-1200x599.jpg" alt="Nicole Lopez del Carril/The Gazelle" width="1200" height="599" class="size-full wp-image-128611" /></div><em>Nicole Lopez del Carril/The Gazelle</em></p><h3>PRACTICALITIES</h3><ul><p>If you&#8217;re sick of convenience store ramen, take a culinary class from <a href="//www.thegazelle.org/issue/35/features/ad-secrets-lanas-partiperfect/">Lana&#8217;s Partiperfect</a>. </p><p>For the brave at heart, Gold Moon Beauty Salon offers <a href="//www.thegazelle.org/issue/16/features/salon/">fire facials</a>.</p><p>One of the more underrated shisha places of Abu Dhabi, <a href="//www.thegazelle.org/issue/21/features/ad-secrets-la-fontana/">La Fontana</a> offers a terrace view and fresh juices. </p><p>Or you can go to <a href="//www.thegazelle.org/issue/36/features/secrets-5/">Mirage Marine</a> for Shiazo shisha, which is made from flavored steamed stones, and is supposed to be better for your health.</ul><h3>CAFÉ CRAWL</h3><ul><p>Grab some hot chocolate and a slice of spiced ginger cake for an Eid study session at <a href=" //www.thegazelle.org/issue/29/features/secrets-4/">Leopold of London</a>.</p><p>Check out the vintage kitsch vibe — and free Wi-Fi — at café <a href="//www.thegazelle.org/issue/26/features/secrets-2/">Shabby Chic</a>.</p><p>Visit <a href="//www.thegazelle.org/issue/13/features/ad-secrets-2/">Zyara Café</a>, a favorite of the Sama Tower generation, and try some of its amazing labneh. </p><p>Get your<a href="//www.thegazelle.org/issue/19/features/ad-secrets-argo/"> bubble tea</a> fix at Argo Tea.</ul><p><em>Special thanks to Nicole Lopez del Carril, class of 2014. Send your thoughts on this article to feedback@thegazelle.org.</em></p>',
            "image": null,
            "published_at": "2014-08-30T05:58:09.000Z",
            "slug": "the-ad-secrets-challenge",
            "title": "The AD Secrets Challenge",
            "issueId": "76",
            "category": "off-campus",
            "teaser": "A masterlist of Abu Dhabi's hidden gems. How many can you do?",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "art-in-ad"] },
                { $type: "ref", value: ["articlesBySlug", "playlist"] },
            ],
        },
        "advice-to-incoming-first-years": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "lina-elmulsa"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2016/02/@advice-for-freshmen.jpg",
            "html": "",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "advice-to-incoming-first-years",
            "title": "Personal Essay: Advice to Incoming First Years",
            "issueId": "76",
            "category": "commentary",
            "teaser": "How to be a tea and coffee person.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "post-grad"]},
                { $type: "ref", value: ["articlesBySlug", "whitewashing-hollywood"]},
            ],
        },
        "returning-to-nyuad": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "annie-bauer"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2016/02/returning-to-saadiyat.jpg",
            "html": "<p><img src='//thegazelle.s3.amazonaws.com/gazelle/2016/02/returning-to-saadiyat.jpg'></img></p><p><em>Illustration by Reine Defranco</em></p><p>The computer-generated images of Saadiyat Island are awash in green grass and palm fronds, crisscrossed by paved highways and flush with tourists and residents. It boasts prestigious museums like the Louvre and the Guggenheim, eye-catching structures designed by famous foreign architects. It teems with life.</p><p>Of course, that's not what you see outside your dorm window. That's the future. For now, most of Saadiyat Island is under construction or remains undeveloped desert. Amidst this setting, NYU Abu Dhabi's Saadiyat campus looms out of the dust, a cluster of pale buildings huddled in the sand. It looks strange and isolated. During the day, passersby unfamiliar with NYUAD might wonder if it is inhabited.</p><p>The late U.S. Senator and sociologist Daniel Moynihan is widely <a href='//www.timeshighereducation.com/comment/opinion/nyu-president-on-global-universities-idea-capitals-and-talent-snowballs/2004033.article'>quoted</a> as saying that the key to creating a world-class city is to &#34;build a great university and wait 200 years.&#34; We might be the great university Moynihan spoke of, but we don't have 200 years to wait, even with the famously rapid rate of construction in the UAE. Instead we must think about what makes this place one that we return to, only six years in the making.</p><p>I finished my second year of university in Buenos Aires, Argentina. If all goes well and I manage to churn out a capstone and pass the rest of my courses, I'm halfway done. The idea that my time at NYUAD was limited must have had an impact on me because as relieved as I felt to be finished with finals, I still flew from the other side of the world to come back to campus for a summer course. There were about three days in between when I had no homework and felt blissfully unencumbered, ready to sail off into a summer free of academics. Yet, as soon as I landed in Abu Dhabi the feeling of comfort and familiarity was unmistakable &mdash; I was home.</p><p>The course was very demanding. I got stressed and nervous and lost sleep because of exams, just as I had expected to. But living on campus again, I was back in my element. I reveled in the 40 degree Celsius heat and blinding sunshine. After four months in a homestay in Buenos Aires, I felt grateful for a new, clean dorm room and the safety of Abu Dhabi&rsquo;s streets. During the summer term, friends congregated in the dining hall over hummus and wraps from the Grab and Go counter, just as they had always done. The Library Caf&eacute; welcomed us with its sunlit corners for tea and studying. We all got sweaty just from walking from our dorms to the gym. These are our small traditions on campus, the kinds of common habits a student body develops and bonds over at university, and they are an anchoring comfort.</p><p>What truly made the return to Saadiyat a homecoming, though, were friends. The only reason I can write this kind of essay is because of long discussions with close friends over shisha or in the backseats of cabs, a product of the critical urge we have to talk about how NYUAD is changing and how it is changing us. Without friends like this, I would not fully understand myself, and these ideas and questions would only fester in my mind and serve to isolate me even further on this campus surrounded by sand. <br /><br />As much as our campus appears stark and uninhabited from the outside, returning to Saadiyat reminded me that I am an insider. I do inhabit this campus, and despite semesters away, January Term courses and breaks spent elsewhere, my friends are my roots. The Gazelle published a special issue last fall about mental health at NYUAD, and time and again, students used those pages to emphasize the need for more connection and support among friends. The people that make up NYUAD and the relationships forged in these peculiar circumstances are what give this place meaning, and what keeps us all coming back. <br /></p><p><em>Annie Bauer is Deputy Copy Chief. Email her at feedback@thegazelle.org.</em></p>",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "returning-to-nyuad",
            "title": "Returning to NYUAD",
            "issueId": "76",
            "category": "commentary",
            "teaser": "Amidst the transience of our student body, what anchors us to our home campus?",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "letter"]},
                { $type: "ref", value: ["articlesBySlug", "picking-courses"]},
            ],
        },
        "art-in-ad": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "larayb-abrar"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2016/02/Art-in-AD.jpg",
            "html": "",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "art-in-ad",
            "title": "Five Places in AD To See Art",
            "issueId": "76",
            "category": "off-campus",
            "teaser": "More than enough reasons to get off campus.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "the-ad-secrets-challenge"] },
                { $type: "ref", value: ["articlesBySlug", "playlist"] },
            ],
        },
        "playlist": {
            "authors": [
                // { $type: "ref", value: ["authorsBySlug", "larayb-abrar"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2016/02/arabic-playlist.jpg",
            "html": "",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "playlist",
            "title": "Essential Arabic Tunes",
            "issueId": "76",
            "category": "off-campus",
            "teaser": "",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "the-ad-secrets-challenge"] },
                { $type: "ref", value: ["articlesBySlug", "art-in-ad"] },
            ],
        },
        "post-grad": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "krushika-uday-patankar"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2016/02/life-after-graduation.jpg",
            "html": "",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "post-grad",
            "title": "Life After Graduation",
            "issueId": "76",
            "category": "commentary",
            "teaser": "Be a little reckless, but only just a little bit.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "whitewashing-hollywood"]},
                { $type: "ref", value: ["articlesBySlug", "nyuad-survival-guide"]},
            ],
        },
        "changes-with-marhaba": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "suka-naka"] },
                { $type: "ref", value: ["authorsBySlug", "taj-chapman"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2016/02/changes-to-marhaba.png",
            "html": "<p><img src='//thegazelle.s3.amazonaws.com/gazelle/2016/02/changes-to-marhaba.png'></img><p><em>Graphic by Alejandra Trejo/The Gazelle</em></p></p><p>Aug. 19 marked the beginning of the annual Marhaba event for the incoming Class of 2020 at NYU Abu Dhabi. Although the size of the incoming class hasn&rsquo;t increased drastically since last year, the Marhaba program has undergone some major changes.</p><p>A large class size of 325 freshmen is likely to result in the use of an enormous amount of resources which, in turn, will generate a large quantity of waste. This year, therefore, one of the main objectives when planning Marhaba was to promote the idea of sustainability and inculcate a sense of responsibility among freshmen as they enter the NYUAD community.</p><p>In the past, students have received goodie bags &mdash; referred to as NYUAD Swag Bags &mdash; containing items useful for their transition to life at university. This year, these items include reusable take-away boxes and water bottles. Boxes of plastic water bottles around campus have been replaced by water coolers so that students can refill their water bottles instead.</p><p>Another major change to Marhaba is its duration. According to feedback from last year, many students felt that the events were too condensed in the one-week period. In response, the Marhaba team spread everything out over 10 days so that students are not overwhelmed. In addition, the Marhaba team came up with student-led optional workshops to give students the chance to learn about various aspects of student life at NYUAD. These workshops included Dining at NYUAD 101, How to Make Your Dorm Feel Like Home and Budgeting. While these workshops are useful in their own right, they are also intended to encourage greater interaction between the freshmen and the Marhaba leaders, a group of 16 upperclassmen who are helping run Marhaba.</p><p>The effort to encourage interaction between freshmen and upperclassmen continues with the final Marhaba activity, the Marhaba Carnival. Marhaba Carnival will act as an introduction to the College Parent Program, an initiative started by 2015-16 Freshman Class Representative Chris Wheeler. In this program, two upperclassmen are paired with up to five incoming freshmen to act as their student mentors.</p><p>Overall, this year's Marhaba program aims to create a balance between freshmen getting to know each other and becoming acquainted with their new community.</p><p><em>Saka Naka and Taj Chapman are contributing writers. Email them at feedback@thegazelle.org.</em></p>",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "changes-with-marhaba",
            "title": "A Rundown on Marhaba 2016",
            "issueId": "76",
            "category": "on-campus",
            "teaser": "Annual welcome focuses on sustainability and interaction.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "dear-freshmen"] },
                { $type: "ref", value: ["articlesBySlug", "visas"] },
            ],
        },
        "visas": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "connor-pearce"] },
            ],
            "featuredImage": "//thegazelle.s3.amazonaws.com/gazelle/2016/02/visas.jpg",
            "html": "<p><img src='//thegazelle.s3.amazonaws.com/gazelle/2016/02/visas.jpg'></img><p>Prior to commencing their studies at NYU Abu Dhabi, at least three students admitted to the Class of 2020 have had their visas rejected or delayed by the UAE. This means that these students will not be able to begin their studies until January Term at the earliest.</p><p>This is not the first time that students have had to delay their studies due to visa issues. In a Facebook thread discussing the delay, students from the Class of 2018 and the Class of 2019 also shared their experiences of having their visas delayed or rejected. All the students who said that their visas had been previously delayed were nationals of countries in the Middle East and North Africa, including Turkey, Lebanon and Egypt.</p><p>Incoming freshman Doğukan Avcı and rising junior Majed BouGhanem both suggested that their nationalities, Turkish and Lebanese respectively, were the reason for their visas being delayed.</p><p>In an email to The Gazelle, the Dean of Students Kyle Farley wrote, 	&#34;It has not been our experience that all students from any specific country will consistently experience a delay with visa processing, so we cannot make any assumptions about who will experience a delay in their visa.&#34;</p><p>Tunisian alumnus Imen Haddad had high praise for the university&rsquo;s response and spent the beginning of the fall semester in New York before being flown to Abu Dhabi when her visa was approved 10 days later.</p><p>&ldquo;I was amazed by the support and special care that NYUAD staff and faculty had offered me throughout that process, and I realized that this university was the best fit for me. I received daily phone calls from the [then] Dean of Students, Julie Avina, and from other admissions staff,&rdquo; wrote Haddad.</p><p>In contrast to Haddad's experience, Avcı was only offered the possibility of commencing his studies in J-Term. Similarly, BouGhanem was given the choice of either starting during J-Term or attending NYU Polytechnic &mdash; now known as NYU Tandon &mdash; but without the financial aid that was offered to him to attend NYUAD.</p><p>Farley noted, &#34;We work closely with the student to identify alternative solutions &mdash; which include starting school in the spring semester or deferring their admission until the following academic year. It is not an option for an NYUAD student to first begin their studies in New York as our priority is integrating the student into the NYUAD community as soon as their visa is approved.	&#34;</p><p>Farley also noted that he personally spoke with each student experiencing a delay. 	&#34;I am impressed with how understanding and patient they have been,	&#34; he wrote.</p><p>In a written conversation with The Gazelle, Avcı noted, &#34;This is not an incident that would make me change my university decision.&#34; Like Haddad, Avcı went on to praise the university&rsquo;s response. He also praised the NYUAD student body for the support he had received from them, saying, &#34;The aid I received from students was the main morale booster. The support I acquired made me feel [like] a part of the NYUAD community. &rdquo;&nbsp;</p><p>BouGhanem had less praise for the university's response; in written correspondence, BouGhanem noted that the &#34;complete lack of updates didn&rsquo;t help.&#34; He was disenchanted with NYUAD, and felt that the process that he went through demonstrated the distance between the ideals of the global university and the realities of citizenship.</p><p>	&#34;NYUAD is a place that respects and appreciates diversity and the idea of global citizenship, but I just found my situation very ironic; one can get accepted and funded, but can&rsquo;t actually go there because your entry relies on a booklet that apparently defines who you are,&#34; wrote BouGhanem.</p><p>Haddad saw the university as breaking down the barriers that are imposed by passport regulations, noting, &ldquo;You have to work with what you got to get the best outcome and try to affect as many people as you can, that&rsquo;s what NYUAD is doing one student visa at a time.&rdquo;</p><p>Timing was also an issue for students, who only found out about the visa delays after having rejected alternative offers in accordance with academic integrity conventions and the Common Application&rsquo;s regulations.</p><p>&#34;By the time I was told of the delays, I had lost all the alternatives &mdash; I had rejected my other offers beforehand &hellip; Of course if I had known of the high probability of the four months delay, I would have left my other choices open,&#34; said BouGhanem. </p><p>Farley also identified this as an issue, writing, 	&#34;We recognize that students will have likely turned down offers at other institutions, so we do everything we can to ensure they can attend NYUAD.&#34;</p><p>Avcı suggested that students should be told of the possibility of their visas being delayed prior to beginning the visa process, if not during Candidate Weekend.</p><p>Farley noted, &#34;We are looking at how to best manage expectations around this process for future students as the class sizes increase.&#34;</p><p><em>Connor Pearce is editor-in-chief. Email him at feedback@thegazelle.org.</em></p><p>&nbsp;</p>",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "visas",
            "title": "Students left waiting due to visa delays",
            "issueId": "76",
            "category": "on-campus",
            "teaser": "At least three freshmen have had their visas delayed and may not start with the rest of their class.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "dear-freshmen"] },
                { $type: "ref", value: ["articlesBySlug", "changes-with-marhaba"] },
            ],
        },
        "whitewashing-hollywood": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "joey-bui"] },
            ],
            "featuredImage": "",
            "html": "",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "whitewashing-hollywood",
            "title": "Depictions of Asians in Hollywood",
            "issueId": "76",
            "category": "commentary",
            "teaser": "The poor depiction of Asians in Hollywood perpetuates discrimination.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "nyuad-survival-guide"]},
                { $type: "ref", value: ["articlesBySlug", "letter"]},
            ],
        },
        "letter": {
            "authors": [
                //{ $type: "ref", value: ["authorsBySlug", "joey-bui"] },
            ],
            "featuredImage": "",
            "html": "",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "letter",
            "title": "Letter From The Editors",
            "issueId": "76",
            "category": "commentary",
            "teaser": "",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "returning-to-nyuad"]},
                { $type: "ref", value: ["articlesBySlug", "picking-courses"]},
            ],
        },
        "picking-courses": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "supriya-kamath"] },
            ],
            "featuredImage": "",
            "html": "<p><img></img></p><p>In the summer before freshman year, I made a scientific breakthrough.</p><p>Having spent weeks poring over a worn-out copy of the NYU Abu Dhabi Academic Bulletin and having filled out every academic planning resource I could unearth from the darkest, creepiest depths of the NYUAD Student Portal, I hit upon a formula for academic success.</p><p>This was a formula that would allow me to fulfil my lifelong academic dream of completing two majors, two concentrations and my cores. A formula that would let me earn credits beyond my wildest imagination.</p><p>But it all hinged on one tiny, reasonable assumption: that I would get three out of the eight courses I had listed on my course enrollment preference form.</p><p>I got two.</p><p>Having been brutally spurned by the Gods of course enrollment, I spent the next year doing things I would have never dreamt of doing. With my plan in tatters, I took courses outside of my intended majors. I took cores outside of my comfort zone. In the beginning, it was horrifying.</p><p>And then, it wasn&rsquo;t.</p><p>In fact, it&rsquo;s probably one of the best things that happened to me in freshman year. Here&rsquo;s what I learned:</p><p><strong>College Is the Best Time to Get Yourself Some Mad Skillz:</strong> In the summer before freshman fall, my parents suggested that I take a coding course in college. As a prospective literature major, my reaction was, Bah! Humbug. Everybody knew that when the apocalypse came around and the Wi-Fi went out, the only thing left would be the written word. What would I do with &lt;print (&ldquo;Hello world!&rdquo;)&gt; when there was no world left to say hello to?</p><p>As a lover of the humanities, I also didn&rsquo;t see how learning about algorithms and compilers could possibly help me as an artist. Instead, shouldn&rsquo;t I use my college years to improve my literary knowledge as much as I possibly can? &nbsp;&nbsp;&nbsp;</p><p>&ldquo;Words are my jam,&rdquo; I informed my parents. &ldquo;I&rsquo;m hella good at words, fam.&rdquo; &nbsp;</p><p>But my eloquence did not persuade them, and neither did my argumentative essay titled, Lit is Lit but Science has No Chill. They persisted, and in the spring, I decided to take a computer science core class.</p><p>It changed my life.</p><p>It was incredibly empowering to be able to create a website from scratch. I now know that if I ever need to develop a website for one of my literary pursuits, I&rsquo;d be able to do it without having to rely on a gum-chewing, baseball cap-wearing web developer. Or at the very least, I&rsquo;d understand that when the web developer said the word back-end they&rsquo;d simply be doing their job and not making inappropriate anatomical references.</p><p>The truth is that a literature major needs to study programming because we don&rsquo;t live in a Maze-Runner-like world, where everyone&rsquo;s job description comprises a single task. Stories today are told digitally, and writers must adapt to survive. A physics major needs to take a course in world history because most scientific breakthroughs have occurred during periods of great historical turmoil. A computer science major must take an interest in literature to understand Maze Runner references.</p><p>College is a time to grow, and the best way to grow is to skill up.</p><p><strong>Never Trust Your High School Instincts:</strong> Your academic tastes in school should not be the yardstick by which you make decisions in college. In school, I disliked classes for all sorts of irrational reasons. For instance, the extent to which I disliked a class was directly proportional to how many flights of stairs I had to climb to get to the classroom.</p><p>So by the time I graduated high school, I wasn&rsquo;t sure about my major, but I was convinced about what I didn&rsquo;t want to study. I didn&rsquo;t want to study math, because it&rsquo;s always made me sad. I didn&rsquo;t want to study economics, because it was rumored to involve math. I didn&rsquo;t want to study chemistry, because my second grade science teacher was a meanie. I was convinced that this process of elimination would lead me to my major.</p><p>I was wrong.</p><p>In school, subjects are compartmentalized into boxes so as to not confuse 12-year-olds. But in college, the assumption is that you can handle a class that tackles a single subject via two or more disciplines: psychology and philosophy, math and anthropology, film and biology.</p><p>I was thrown into a state of disarray. I didn&rsquo;t know which courses to take because in school, psychology class had been on the second floor and philosophy on the sixth. Math had been taught on the fourth floor. Biology class had been in a different building altogether.</p><p>Eventually, I learned to question everything high school had taught me about my academic preferences. As a humanities major, I used to believe that stepping into the science building would give me cooties, but when I finally took a science class, I found out that cooties spread through contact and not by air. It changed my life.</p><p>Saying that you&rsquo;re not a science person is a terrible excuse to not take a science class, and saying that you&rsquo;re not a writing person is a terrible excuse to not take a humanities class. At NYU Abu Dhabi, you&rsquo;re a liberal arts person and you can take any class you want.</p><p><strong>Don&rsquo;t Judge A Course By Its Name:</strong> So how do you actually pick your courses? &nbsp;Read the course description, you might reply. If it sounds interesting, take it.</p><p>Wrong answer. There&rsquo;s a certain extent to which course descriptions help. You may think that a core called What Does An Infection Do? will be related to biology but it may actually be all about zombie movies. It all depends on the professor teaching the course.</p><p>So the first step is to look up the professor&rsquo;s areas of interest, and then head to the bookstore and take a look at the course reading list. And if all else fails, take advantage of Add/ Drop week. In my first semester I had benevolent concerns like, if I drop this class the professor might feel bad, as well as comforting socialist rationales: I&rsquo;ve made friends here so maybe it&rsquo;s safe to just stick with this incredibly hard class because if we fail, at least we&rsquo;ll all fail together</p><p>Course enrollment is an individual endeavor. If you&rsquo;re convinced you can&rsquo;t do it, drop it. </p><p><strong>If You Love Your Academic Plan, Let it Go:</strong> Last year, if someone had told me that I should explore subjects like science and philosophy in my freshman year, I would&rsquo;ve flashed two thumbs up, said &ldquo;Sure, alrighty!&rdquo; and then I would&rsquo;ve turned my head and snorted, &ldquo;Hippie&rdquo;.</p><p>Today, I have embraced the spirit of the liberal arts.</p><p>Yes, it&rsquo;s good to have a plan. Great, even. But there&rsquo;s a fine line between a plan being a useful guide and a plan being the thing that cripples you. You know you&rsquo;ve crossed the line when you find yourself saying, &ldquo;I want to take this incredible course but I can&rsquo;t because then I won&rsquo;t be able to do this particular psychology course in my second semester of junior year, and then my life will start crumbling around me.&rdquo;</p><p>I certainly don&rsquo;t encourage setting your academic plan on fire, but cut yourself some slack this freshman year. Go wild and fill an elective or two with classes that you never imagined you would do. If you really love your four-year academic plan, let it go. Give it some space to live and breathe.</p><p>And if it really loves you, it will come back.</p><p><em>Supriya Kamath is copy chief. Email her at feedback@thegazelle.org</em></p>",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "picking-courses",
            "title": "Course Enrollment Tips: Thinking Outside of Your Major",
            "issueId": "76",
            "category": "commentary",
            "teaser": "If you really love your academic plan, let it go.",
            "related": [
                { $type: "ref", value: ["articlesBySlug", "returning-to-nyuad"]},
                { $type: "ref", value: ["articlesBySlug", "advice-to-incoming-first-years"]},
            ],
        },
        "nyuad-survival-guide": {
            "authors": [
                { $type: "ref", value: ["authorsBySlug", "safa-salim"] },
            ],
            "featuredImage": "",
            "html": "",
            "image": null,
            "published_at": "2016-08-21T05:58:09.000Z",
            "slug": "nyuad-survival-guide",
            "title": "NYUAD Survival Guide",
            "issueId": "76",
            "category": "commentary",
            "teaser": '"May the force be with you."',
            "related": [
                { $type: "ref", value: ["articlesBySlug", "letter"]},
                { $type: "ref", value: ["articlesBySlug", "picking-courses"]},
            ],
        },
    },

    // "sample": {
    //     name: "",
    //     photo: "",
    //     slug: "",
    //     title: "",
    //     biography: "",
    //     articles: [
    //         { $type: "ref", value: ["articlesBySlug", ""] },
    //   ],
    // },
    authorsBySlug: {
        "khadeeja-farooqui": {
            "name": 'Khadeeja Farooqui',
            "photo": '//thegazelle.s3.amazonaws.com/gazelle/2015/10/Ka.jpg',
            "slug": 'khadeeja-farooqui',
            "title": 'Editor-in-Chief',
            "biography": "Khadeeja can often be found juggling Norton’s literature anthologies and a mug of Lipton. Hailing from Pakistan, she loves all things Pakistani, which primarily include naans, paans, laughter and monsoon. In her year away from The Gazelle, she has warmly welcomed back the Oxford comma in her life, but alas that is about to change. She studies postcolonial theory and literature and hopes to make a career out of it. Apparently, this semester she is also learning how to code, in case postcolonial theory doesn’t work out, you know.",
            "articles": [
                { $type: "ref", value: ["articlesBySlug", "50-things"] },
            ],
        },
        "joey-bui": {
            name: 'Joey Bui',
            photo: '//thegazelle.s3.amazonaws.com/gazelle/2013/09/JOEY22.jpg',
            slug: 'joey-bui',
            title: 'Contributer',
            biography: 'Joey Bui is a Vietnamese Australian senior. She is principally interested in immigration policy, literature and coffee. In her free time, Joey enjoys making cà phê sữa đá and testing walls for Platform Nine and Three Quarters potential.',
            articles: [
                { $type: "ref", value: ["articlesBySlug", "50-things"] },
                { $type: "ref", value: ["articlesBySlug", "whitewashing-hollywood"] },
            ],
        },
        "jamie-sutherland": {
            name: "Jamie Sutherland",
            photo: "//1.gravatar.com/avatar/51fd76c08da7d64e4daf0d15c1ee1738?s=200&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D200&r=G",
            slug: "jamie-sutherland",
            title: "Contributer",
            biography: "",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "50-things"] },
            ],
        },
        "zoe-hu": {
            name: "Zoe Hu",
            photo: "//thegazelle.s3.amazonaws.com/gazelle/2013/08/ZOE2.jpg",
            slug: "zoe-hu",
            title: "Contributer",
            biography: "Zoe Hu is a senior Literature major from Hong Kong and the United States. Her goals for the year include conquering her capstone thesis, keeping up with her Arabic and figuring out how to not feel so bad about the stack of unread books by her bed.",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "fixing-a-tire"] },
            ],
        },
        "tessa-ayson": {
            name: "Tessa Ayson",
            photo: "//thegazelle.s3.amazonaws.com/gazelle/2014/09/TSP.jpg",
            slug: "tessa-ayson",
            title: "Contributer",
            biography: "Tessa is a senior majoring in Economics, but is frequently told she 'doesn't look like an econ major,' so there's that. She likes to spend her spare time searching for cardamom-flavoured ice cream near Madinat Zayed and being confused about why she has spare time — it's a busy year. Tessa does not enjoy chocolate, slow walkers or personal jokes. She would also be very happy if the Oxford comma were in the list of dislikes published in her bio.",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "dear-freshmen"] },
            ],
        },
        "karolina-wilczynska": {
            name: "Karolina Wilczynska",
            photo: "//thegazelle.s3.amazonaws.com/gazelle/2015/04/karolina.jpg",
            slug: "karolina-wilczynska",
            title: "Contributor",
            biography: "Karolina is a sophomore passionate about social sciences and where the world is going. When she is not busy drinking her coffee, Karolina likes to tests her luck playing capoeira and the guitar. She was drawn to journalism by the conviction that what we know influences our views and actions; she thinks it coincides nicely with her preference to talk about the world around her rather than herself.",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "post-marhaba-feels"] },
            ],
        },
        "the-gazelle-staff": {
            name: "The Gazelle Staff",
            photo: "//thegazelle.s3.amazonaws.com/gazelle/2013/09/gazelleTEAM.jpg",
            slug: "the-gazelle-staff",
            title: "",
            biography: "",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "the-ad-secrets-challenge"] },
            ],
        },
        "lina-elmulsa": {
            name: "Lina Elmulsa", 
            photo: "//0.gravatar.com/avatar/aa8fd14652d66e2a2059736cb3fb9b60?s=200",
            slug: "lina-elmulsa",
            title: "Contributor",
            biography: "",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "advice-to-incoming-first-years"] },
            ],
        },
        "annie-bauer": {
            name: "Annie Bauer",
            photo: "//thegazelle.s3.amazonaws.com/gazelle/2015/04/Annie.jpg",
            slug: "annie-bauer",
            title: "Deputy Copy Chief",
            biography: "Annie is a sophomore studying Psychology who frequently changes her mind on possible concentrations. She likes coffee and editing, which is why she enjoys being deputy copy chief. She grew up on a farm in northern Vermont and though she loves Abu Dhabi, she still misses alpine skiing and big mountains.",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "returning-to-nyuad"] },
            ],
        },
        "larayb-abrar": {
            name: "Larayb Abrar",
            photo: "//thegazelle.s3.amazonaws.com/gazelle/2015/10/1_0.jpg",
            slug: "larayb-abrar",
            title: "Contributor",
            biography: "Larayb is a very cool and charming individual who often likes to maintain a healthy sense of humility. She is double-majoring in Literature and Social Research and Public Policy. In her free time, she can be found eavesdropping on conversations to find material for her writing.",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "art-in-ad"] },
            ],
        },
        "krushika-uday-patankar": {
            name: "Krushika Patankar",
            photo: "//0.gravatar.com/avatar/c63ec0271e2c8a10b2e343bbd1dec547?s=200&d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D200&r=G",
            slug: "krushika-uday-patankar",
            title: "Contributor",
            biography: "",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "post-grad"] },
            ],
        },
        "connor-pearce": {
            name: "Connor Pearce",
            photo: "//thegazelle.s3.amazonaws.com/gazelle/2015/04/connor.jpg",
            slug: "connor-pearce",
            title: "Co-Editor-In-Chief",
            biography: "Connor Pearce is a tenacious junior who hails from the beautiful coast of Sydney, Australia. His interests revolve primarily around cycling, and you’ll likely find him scrolling through avant-garde Facebook memes in his room, alone, in the dark. Undertaking a History major gives Connor the privilege to write the token history article every special issue.",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "visas"] },
            ],
        },
        "supriya-kamath": {
            name: "Supriya Kamath",
            photo: "//thegazelle.s3.amazonaws.com/gazelle/2016/01/Sup.jpg",
            slug: "supriya-kamath",
            title: "Contributor",
            biography: "Supriya is a Taurus, an ISFJ and a freshman from Mumbai, India. A big believer in the comedic power of Winnie-the-Pooh and Stalinism, she aspires to write sitcoms about pigeons trying to make it in a man’s world. Some say that she’s a huge fan of the British television show Top Gear, but all we know is that she has strong emotional reactions to sans serif typefaces and global warming. She intends to major in Psychology, because she savors the thought of exploring the darkest recesses of the human psyche. She’s also considering Literature, because it’s rad.",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "picking-courses"] },
            ],
        },
        "safa-salim": {
            name: "Safa Salim",
            photo: "//0.gravatar.com/avatar/c63ec0271e2c8a10b2e343bbd1dec547?s=200&d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D200&r=G",
            slug: "safa-salim",
            title: "Contributor",
            biography: "",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "nyuad-survival-guide"] },
            ],
        },
        "suka-naka": {
            name: "Suka Naka",
            photo: "//0.gravatar.com/avatar/c63ec0271e2c8a10b2e343bbd1dec547?s=200&d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D200&r=G",
            slug: "suka-naka",
            title: "Contributor",
            biography: "",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "changes-with-marhaba"] },
            ],
        },
        "taj-chapman": {
            name: "Taj Chapman",
            photo: "//0.gravatar.com/avatar/c63ec0271e2c8a10b2e343bbd1dec547?s=200&d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D200&r=G",
            slug: "taj-chapman",
            title: "Contributor",
            biography: "",
            articles: [
                { $type: "ref", value: ["articlesBySlug", "changes-with-marhaba"] },
            ],
        },
    },
};

export default data;
