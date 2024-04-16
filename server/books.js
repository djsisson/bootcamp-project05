const books = [
  {
    title: "The Autobiography of Malcolm X",
    author: "Malcolm X and Alex Haley ",
    genreid: "11",
    imglink: "https://productimages.worldofbooks.com/0345350685.jpg",
    summary:
      "The Autobiography of Malcolm X is a powerful and candid memoir that traces the life of Malcolm X, from his tumultuous childhood to his transformation into one of the most influential civil rights leaders in American history. Co-written by Alex Haley, the book offers a firsthand account of Malcolm X's journey from a troubled youth involved in crime to his conversion to Islam while serving time in prison. It delves into his experiences with racism, his time as a prominent figure in the Nation of Islam, and his eventual break with the organization. Through his reflections, Malcolm X shares his evolving beliefs on race, religion, and activism, offering valuable insights into the struggles faced by African Americans during the civil rights era. His autobiography is a compelling narrative of self-discovery, resilience, and the quest for justice.",
    key: "OL19801148W",
  },

  {
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    genreid: "11",
    imglink: "https://productimages.worldofbooks.com/0349106533.jpg",
    summary:
      "Long Walk to Freedom is Nelson Mandela's deeply moving autobiography that chronicles his extraordinary life journey. From his childhood in a rural village to his pivotal role in ending apartheid and becoming South Africa's first democratically elected president, Mandela's story is one of resilience, courage, and unwavering commitment to justice. Throughout the book, Mandela shares intimate details of his struggles, sacrifices, and triumphs, including his 27 years of imprisonment on Robben Island. With honesty and humility, he reflects on his personal growth, political activism, and the challenges of leading a nation torn apart by racial injustice.",
  },

  {
    title: "My Life",
    author: "Bill Clinton",
    genreid: "11",
    imglink: "https://productimages.worldofbooks.com/0375414576.jpg",
    summary:
      "My Life is the memoir of Bill Clinton, the 42nd President of the United States. In this candid and comprehensive account, Clinton reflects on his childhood in Arkansas, his rise in politics, and his time in the White House. From his early days as a student leader to his tenure as Governor of Arkansas and ultimately to his presidency, Clinton provides insights into the pivotal moments and decisions that shaped his political career. He discusses his achievements, such as economic prosperity and welfare reform, as well as challenges and controversies, including impeachment proceedings. Through personal anecdotes and political analysis, Clinton offers readers a nuanced perspective on his presidency and the complex issues facing the nation during his time in office.",
  },

  {
    title: "Bossypants",
    author: "Tina Fey",
    genreid: "11",
    imglink: "https://productimages.worldofbooks.com/0751547832.jpg",
    summary:
      "Bossypants is Tina Fey's witty and insightful memoir that takes readers on a humorous journey through her life and career in comedy. From her childhood in Pennsylvania to her rise to fame as a writer, actress, and producer on Saturday Night Live and 30 Rock, Fey shares candid anecdotes and reflections on navigating the male-dominated world of comedy. With her trademark humor and self-deprecating charm, she offers behind-the-scenes glimpses into her experiences in show business, including memorable encounters with colleagues and celebrities. Along the way, Fey imparts valuable lessons on confidence, ambition, and the importance of staying true to oneself.",
  },

  {
    title: "I Know Why the Caged Bird Sings",
    author: "Maya Angelo",
    genreid: "11",
    imglink: "https://productimages.worldofbooks.com/1405882654.jpg",
    summary:
      "I Know Why the Caged Bird Sings is Maya Angelou's powerful and poignant memoir, recounting her childhood and adolescence in the racially segregated South. The book explores themes of racism, identity, trauma, and resilience as Angelou shares her experiences of growing up amidst poverty, abuse, and prejudice. Despite facing numerous challenges, including sexual assault and the struggle for acceptance, Angelou finds solace and strength in literature and poetry. Through her eloquent prose and vivid storytelling, she emerges as a symbol of triumph over adversity, inspiring readers with her courage, wisdom, and indomitable spirit.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genreid: "1",
    imglink: "https://productimages.worldofbooks.com/0099549484.jpg",
    summary:
      "Set in the American South during the 1930s, To Kill a Mockingbird follows the Finch family and their experiences with racism and injustice. Narrated by Scout Finch, the novel explores themes of morality, compassion, and empathy as the family grapples with the trial of Tom Robinson, a black man falsely accused of raping a white woman. Through Scout's innocent perspective, readers witness the harsh realities of prejudice and discrimination in society.",
  },

  {
    title: "1984",
    author: "George Orwell",
    genreid: "1",
    imglink: "https://productimages.worldofbooks.com/014118776X.jpg",
    summary:
      "1984 is a dystopian novel set in a totalitarian society ruled by the Party led by Big Brother. The story follows Winston Smith, a disillusioned member of the ruling Party who rebels against its oppressive regime. As Winston navigates a world of surveillance, propaganda, and thought control, he grapples with questions of truth, freedom, and individuality. Orwell's novel serves as a chilling warning about the dangers of totalitarianism and the erosion of personal freedoms.",
  },

  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genreid: "1",
    imglink: "https://productimages.worldofbooks.com/2382740663.jpg",
    summary:
      "Pride and Prejudice is a classic romantic comedy set in early 19th-century England. The novel follows the Bennet family, particularly the headstrong Elizabeth Bennet, as they navigate the intricacies of social status, marriage, and love. When the wealthy and aloof Mr. Darcy enters their lives, he and Elizabeth clash initially due to their pride and prejudices. However, as they overcome misunderstandings and societal expectations, they discover a deeper connection and mutual respect.",
  },

  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genreid: "1",
    imglink: "https://productimages.worldofbooks.com/185326041X.jpg",
    summary:
      "The Great Gatsby is a tragic tale set in the Roaring Twenties, depicting the glittering but ultimately hollow lives of the wealthy elite on Long Island. Narrated by Nick Carraway, the story centers around the enigmatic Jay Gatsby and his obsession with Daisy Buchanan, a married woman from his past. As Gatsby pursues his American Dream of wealth and success to win Daisy's affection, the novel explores themes of love, illusion, and the corrupting influence of wealth.",
  },

  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genreid: "1",
    imglink: "https://productimages.worldofbooks.com/1603810137.jpg",
    summary:
      "The Catcher in the Rye is a coming-of-age novel narrated by the disillusioned teenager Holden Caulfield. After being expelled from his prep school, Holden embarks on a journey through New York City, grappling with feelings of alienation, loneliness, and existential angst. As he encounters various characters and situations, Holden's narrative serves as a critique of societal hypocrisy and the loss of innocence in the transition to adulthood.",
  },

  {
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    genreid: "4",
    imglink: "https://productimages.worldofbooks.com/1529176751.jpg",
    summary:
      "The Girl on the Train by Paula Hawkins follows the gripping story of Rachel, an alcoholic woman who becomes entangled in a missing person investigation. As she observes a couple from the train window every day, she becomes convinced they have the perfect life. However, when the woman goes missing, Rachel finds herself drawn into the mystery, uncovering dark secrets about the couple and her own past.",
  },

  {
    title: "The Bourne Identity",
    author: "Robert Ludlum",
    genreid: "4",
    imglink: "https://productimages.worldofbooks.com/1409167860.jpg",
    summary:
      "The Bourne Identity by Robert Ludlum introduces Jason Bourne, a man suffering from amnesia who is found floating in the Mediterranean Sea with gunshot wounds. As he tries to piece together his identity, he discovers he is a highly skilled operative caught in a web of espionage and danger, pursued by both his enemies and his own shadowy past.",
  },

  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genreid: "4",
    imglink: "https://productimages.worldofbooks.com/1409181634.jpg",
    summary:
      "The Silent Patient by Alex Michaelides revolves around Alicia Berenson, a famous painter who murders her husband and then stops speaking. Psychotherapist Theo Faber becomes obsessed with uncovering the truth behind her silence and delves into her past, unraveling a complex and twisted tale of love, betrayal, and obsession.",
  },

  {
    title: "The Woman in the Window",
    author: "A.J. Finn ",
    genreid: "4",
    imglink: "https://productimages.worldofbooks.com/194778353X.jpg",
    summary:
      "The Woman in the Window by A.J. Finn follows Anna Fox, a woman with agoraphobia who spends her days spying on her neighbors. When she witnesses a crime in the house across the street, she becomes entangled in a web of deception and danger, blurring the lines between reality and paranoia as she struggles to uncover the truth.",
  },

  {
    title: "The Reversal",
    author: "Michael Connelly",
    genreid: "4",
    imglink: "https://productimages.worldofbooks.com/1409118304.jpg",
    summary:
      "The Reversal by Michael Connelly features defense attorney Mickey Haller and LAPD detective Harry Bosch teaming up to prosecute a high-profile case involving a convicted child molester seeking exoneration. As they navigate the legal system and confront their own demons, they uncover shocking revelations that challenge their beliefs about justice and redemption.",
  },

  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genreid: "3",
    imglink: "https://productimages.worldofbooks.com/0141372567.jpg",
    summary:
      "The Da Vinci Code by Dan Brown follows Harvard symbologist Robert Langdon and cryptologist Sophie Neveu as they unravel a complex web of secrets and conspiracies surrounding the murder of a curator at the Louvre Museum in Paris. The duo embarks on a thrilling quest across Europe, deciphering ancient symbols and uncovering hidden truths about the Holy Grail and the secrets of Christianity.",
  },

  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    genreid: "3",
    imglink: "https://productimages.worldofbooks.com/1780228228.jpg",
    summary:
      "Gone Girl by Gillian Flynn revolves around the disappearance of Amy Dunne on her fifth wedding anniversary, which quickly becomes a media sensation. As the investigation unfolds, secrets and lies are revealed, casting suspicion on both Amy's husband, Nick, and Amy herself. The story takes twists and turns as it delves into the complexities of marriage, identity, and manipulation.",
  },

  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    genreid: "3",
    imglink: "https://productimages.worldofbooks.com/0008226679.jpg",
    summary:
      "Murder on the Orient Express by Agatha Christie follows the renowned detective Hercule Poirot as he investigates the murder of a wealthy American passenger aboard the luxurious Orient Express train. With a limited pool of suspects and a locked train compartment, Poirot must use his keen powers of deduction to unravel the mystery and identify the culprit among the passengers.",
  },

  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    genreid: "3",
    imglink: "https://productimages.worldofbooks.com/0312924585.jpg",
    summary:
      "The Silence of the Lambs by Thomas Harris features FBI trainee Clarice Starling as she seeks the help of incarcerated cannibalistic serial killer Dr. Hannibal Lecter to catch another serial killer known as Buffalo Bill. As Clarice delves deeper into the twisted mind of Buffalo Bill, she forms a complex relationship with Lecter, leading to a gripping and suspenseful climax.",
  },

  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genreid: "3",
    imglink: "https://productimages.worldofbooks.com/1785861735.jpg",
    summary:
      "The Girl with the Dragon Tattoo by Stieg Larsson introduces journalist Mikael Blomkvist and hacker Lisbeth Salander as they team up to investigate the disappearance of a wealthy industrialist's niece. Their investigation uncovers dark family secrets, financial corruption, and violence, leading to a thrilling and dangerous confrontation with the perpetrators.",
  },

  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genreid: "5",
    imglink: "https://productimages.worldofbooks.com/2382740663.jpg",
    summary:
      "Pride and Prejudice by Jane Austen follows the lives of the Bennet family, particularly the headstrong Elizabeth Bennet, as they navigate social conventions, love, and marriage in early 19th-century England. The novel explores themes of class, manners, and the complexities of romantic relationships, culminating in the tumultuous courtship between Elizabeth and the proud Mr. Darcy.",
  },

  {
    title: "Outlander",
    author: "Diana Gabaldon",
    genreid: "5",
    imglink: "https://productimages.worldofbooks.com/1784751375.jpg",
    summary:
      "Outlander by Diana Gabaldon tells the story of Claire Randall, a World War II nurse who finds herself transported back in time to 18th-century Scotland. Amidst the backdrop of political intrigue and Jacobite rebellion, Claire becomes entangled with the dashing Highland warrior Jamie Fraser. The novel combines elements of historical fiction, romance, and adventure as Claire grapples with her love for Jamie and her desire to return to her own time.",
  },

  {
    title: "The Notebook",
    author: "Nicholas Sparks",
    genreid: "5",
    imglink: "https://productimages.worldofbooks.com/0751540471.jpg",
    summary:
      "The Notebook by Nicholas Sparks follows the enduring love story of Noah Calhoun and Allie Nelson, who meet and fall in love one summer in North Carolina. Despite their different backgrounds and the obstacles they face, their love persists over the years. The novel alternates between the present-day narrative of an elderly Noah reading to his wife Allie, who suffers from dementia, and flashbacks to their youthful romance.",
  },

  {
    title: "Me Before You",
    author: "Jojo Moyes",
    genreid: "5",
    imglink: "https://productimages.worldofbooks.com/B0065GC0BA.jpg",
    summary:
      "Me Before You by Jojo Moyes centers on the relationship between Louisa Clark, a quirky and unconventional young woman, and Will Traynor, a wealthy and adventurous man who becomes paralyzed after a tragic accident. As Louisa becomes Will's caregiver, she challenges him to find joy and purpose in life despite his disability. The novel explores themes of love, sacrifice, and the value of life.",
  },

  {
    title: "The Rosie Project",
    author: "Graeme Simsion",
    genreid: "5",
    imglink: "https://productimages.worldofbooks.com/1405912790.jpg",
    summary:
      "The Rosie Project by Graeme Simsion follows socially awkward genetics professor Don Tillman as he embarks on a quest to find a wife using his scientific approach to dating. His meticulously planned Wife Project takes an unexpected turn when he meets Rosie Jarman, a free-spirited and spontaneous woman who enlists his help to find her biological father. Their unlikely partnership leads to humorous and heartwarming discoveries about love and compatibility.",
  },

  {
    title: "Dune",
    author: "Frank Herbert",
    genreid: "6",
    imglink: "https://productimages.worldofbooks.com/1529347858.jpg",
    summary:
      "Dune by Frank Herbert is a science fiction epic set in a distant future where noble houses vie for control over the desert planet Arrakis, the only source of the valuable spice melange. The story follows young Paul Atreides as he becomes embroiled in political intrigue, prophecy, and desert warfare, ultimately leading a rebellion against the oppressive rule of the Empire.",
  },

  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genreid: "6",
    imglink: "https://productimages.worldofbooks.com/1529034523.jpg",
    summary:
      "The Hitchhiker's Guide to the Galaxy by Douglas Adams is a comedic science fiction novel that follows the adventures of Arthur Dent, an ordinary human who is swept off Earth just before its destruction to make way for an intergalactic highway. Arthur embarks on a journey through space with his eccentric alien friend Ford Prefect, encountering bizarre creatures, interstellar bureaucracy, and the ultimate answer to life, the universe, and everything.",
  },

  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    genreid: "6",
    imglink: "https://productimages.worldofbooks.com/0356500845.jpg",
    summary:
      "Ender's Game by Orson Scott Card is a military science fiction novel set in a future where humanity is preparing for a potential war against an alien race known as the Formics. The story follows Ender Wiggin, a young boy who is recruited into a rigorous military training program to become a brilliant strategist and leader. As Ender rises through the ranks, he must grapple with the moral complexities of war and the true nature of his training.",
  },

  {
    title: "Neuromancer",
    author: "William Gibson",
    genreid: "6",
    imglink: "https://productimages.worldofbooks.com/1473217385.jpg",
    summary:
      "Neuromancer by William Gibson is a cyberpunk novel set in a dystopian future where powerful corporations wield control over technology and society. The story follows Case, a washed-up computer hacker who is hired by a mysterious employer to pull off one last heist in cyberspace. As Case delves deeper into the virtual world, he becomes embroiled in a complex web of intrigue, danger, and betrayal.",
  },

  {
    title: "The Martian",
    author: "Andy Weir",
    genreid: "6",
    imglink: "https://productimages.worldofbooks.com/1785031139.jpg",
    summary:
      "The Martian by Andy Weir is a science fiction novel that follows astronaut Mark Watney as he becomes stranded alone on Mars after a mission goes awry. Using his ingenuity and scientific knowledge, Watney must find a way to survive on the hostile planet while awaiting rescue. The novel combines elements of survival thriller and hard science fiction as Watney faces numerous challenges and obstacles in his quest for survival.",
  },

  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genreid: "7",
    imglink: "https://productimages.worldofbooks.com/0345534832.jpg",
    summary:
      "The Hobbit by J.R.R. Tolkien is a fantasy adventure novel that follows the journey of Bilbo Baggins, a hobbit who is enlisted by the wizard Gandalf to accompany a group of dwarves on a quest to reclaim their homeland and treasure from the dragon Smaug. Along the way, Bilbo encounters trolls, elves, goblins, and other fantastical creatures, and ultimately discovers courage and resourcefulness he never knew he had.",
  },

  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genreid: "7",
    imglink: "https://productimages.worldofbooks.com/059035342X.jpg",
    summary:
      "Harry Potter and the Sorcerer's Stone by J.K. Rowling is the first book in the Harry Potter series, which follows the journey of a young wizard named Harry Potter as he discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry. In this book, Harry learns about his parents' mysterious deaths, uncovers secrets about his past, and confronts the dark wizard Voldemort, who seeks to return to power.",
  },

  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    genreid: "7",
    imglink: "https://productimages.worldofbooks.com/0007428545.jpg",
    summary:
      "A Game of Thrones by George R.R. Martin is the first book in the epic fantasy series A Song of Ice and Fire, set in the fictional continents of Westeros and Essos. The story follows the power struggles between noble families as they vie for control of the Iron Throne and the Seven Kingdoms of Westeros. Amidst political intrigue, betrayal, and war, dark forces stir in the North, threatening the realm with destruction.",
  },

  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genreid: "7",
    imglink: "https://productimages.worldofbooks.com/0575081406.jpg",
    summary:
      "The Name of the Wind by Patrick Rothfuss is the first book in the Kingkiller Chronicle series, which follows the life of Kvothe, a gifted young musician and magician with a mysterious past. The story is framed as Kvothe narrating his life story to a scribe, chronicling his rise to fame as a legendary figure known as the Kingkiller. As Kvothe recounts his adventures, he faces challenges, makes allies and enemies, and seeks answers to the mysteries of his past.",
  },
  {
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    genreid: "7",
    imglink: "https://productimages.worldofbooks.com/1250318548.jpg",
    summary:
      "Mistborn: The Final Empire by Brandon Sanderson is the first book in the Mistborn trilogy, set in a world where a dark lord known as the Lord Ruler reigns over an oppressive empire. The story follows Vin, a young street urchin with a mysterious power, as she joins a band of rebels seeking to overthrow the Lord Ruler and bring freedom to the oppressed skaa. Along the way, Vin discovers her own destiny and the true nature of her powers.",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    genreid: "8",
    imglink: "https://productimages.worldofbooks.com/1909531618.jpg",
    summary:
      "The Book Thief by Markus Zusak is a historical novel set in Nazi Germany during World War II, narrated by Death. It tells the story of Liesel Meminger, a young girl who is sent to live with foster parents in a small town outside of Munich. Amidst the horrors of war, Liesel finds solace in stealing books and sharing them with her neighbors and the Jewish man hidden in her basement. The novel explores themes of love, loss, and the power of storytelling to endure in the face of adversity.",
  },
  {
    title: "All the Light We Cannot See",
    author: "Anthony Doerr ",
    genreid: "8",
    imglink: "https://productimages.worldofbooks.com/0008548358.jpg",
    summary:
      "All the Light We Cannot See by Anthony Doerr is a Pulitzer Prize-winning novel set during World War II. The story follows two protagonists: Marie-Laure LeBlanc, a blind French girl forced to flee Paris with her father, and Werner Pfennig, a German orphan recruited by the Nazi army for his engineering skills. As their paths converge and diverge amidst the chaos of war, the novel explores themes of fate, morality, and the resilience of the human spirit.",
  },
  {
    title: "The Nightingale",
    author: "Kristin Hannah",
    genreid: "8",
    imglink: "https://productimages.worldofbooks.com/1509848622.jpg",
    summary:
      "The Nightingale by Kristin Hannah is a historical fiction novel set in Nazi-occupied France during World War II. It follows the lives of two sisters, Vianne and Isabelle Mauriac, who take different paths to resist the German occupation. While Vianne tries to protect her family and survive under the watchful eye of the enemy, Isabelle joins the French Resistance and risks her life to save others. The novel explores themes of courage, sacrifice, and the bonds of sisterhood.",
  },
  {
    title: "The Underground Railroad",
    author: "Colson Whitehead ",
    genreid: "8",
    imglink: "https://productimages.worldofbooks.com/0349726809.jpg",
    summary:
      "The Underground Railroad by Colson Whitehead is a Pulitzer Prize-winning novel that reimagines the historical Underground Railroad as a literal network of underground railways and tunnels used by escaped slaves to flee to freedom in the antebellum South. The story follows Cora, a young slave on a Georgia plantation, as she embarks on a perilous journey northward, pursued by a relentless slave catcher. Through Cora's odyssey, the novel explores themes of race, freedom, and the legacy of slavery in America.",
  },
  {
    title: "The Tattooist of Auschwitz",
    author: "Heather Morris",
    genreid: "8",
    imglink: "https://productimages.worldofbooks.com/1785763679.jpg",
    summary:
      "The Tattooist of Auschwitz by Heather Morris is a novel based on the true story of Lale Sokolov, a Slovakian Jew who was imprisoned in the Auschwitz-Birkenau concentration camp during World War II. As the camp's tattooist, Lale is responsible for marking the arms of incoming prisoners with identification numbers. Amidst the horrors of the Holocaust, Lale falls in love with Gita, a fellow prisoner, and risks his life to ensure their survival. The novel portrays the resilience of the human spirit in the face of unimaginable suffering.",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    genreid: "9",
    imglink: "https://productimages.worldofbooks.com/1326621793.jpg",
    summary:
      "Dracula by Bram Stoker is a classic Gothic horror novel that tells the story of Count Dracula's attempt to move from Transylvania to England in order to spread the undead curse and find new blood. The novel is presented as a series of letters, diary entries, and newspaper clippings, chronicling the efforts of a group of people led by Professor Abraham Van Helsing to thwart Dracula's plans. As they race against time to stop the vampire, they encounter themes of superstition, sexuality, and the struggle between good and evil.",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genreid: "9",
    imglink: "https://productimages.worldofbooks.com/147369549X.jpg",
    summary:
      "The Shining by Stephen King is a psychological horror novel that follows Jack Torrance, an aspiring writer and recovering alcoholic, who takes a job as the winter caretaker of the Overlook Hotel in Colorado. As Jack, his wife Wendy, and their young son Danny settle into the isolated hotel, supernatural forces begin to exert their influence, driving Jack to madness and putting his family in grave danger. The novel explores themes of addiction, isolation, and the breakdown of the family unit.",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genreid: "9",
    imglink: "https://productimages.worldofbooks.com/0141439475.jpg",
    summary:
      "Frankenstein by Mary Shelley is a groundbreaking work of science fiction and horror that tells the story of Victor Frankenstein, a young scientist who creates a sentient creature through a series of scientific experiments. Horrified by his creation, Victor abandons the creature, which then embarks on a journey of self-discovery and revenge. The novel raises questions about the ethics of scientific experimentation, the nature of humanity, and the consequences of playing god.",
  },
  {
    title: "Bird Box",
    author: "Josh Malerman ",
    genreid: "9",
    imglink: "https://productimages.worldofbooks.com/000831974X.jpg",
    summary:
      "Bird Box by Josh Malerman is a post-apocalyptic horror novel set in a world where mysterious creatures drive people to madness and suicide if they are seen. The story follows Malorie, a young mother, and her two children as they navigate a treacherous river blindfolded in search of safety. Alternating between the present and flashbacks to the early days of the apocalypse, the novel builds tension and suspense as Malorie struggles to protect her family from the unseen threat.",
  },
  {
    title: "It",
    author: "Stephen King",
    genreid: "9",
    imglink: "https://productimages.worldofbooks.com/1444707868.jpg",
    summary:
      "It by Stephen King is a horror novel that follows a group of childhood friends who reunite as adults to confront a terrifying entity that has haunted their hometown of Derry, Maine, for centuries. The entity, known as Pennywise the Dancing Clown, preys on the fears of its victims and feeds on the town's children. As the friends confront their past traumas and face their greatest fears, they must band together to defeat the evil lurking beneath Derry. The novel explores themes of friendship, courage, and the power of memory.",
  },
  {
    title: "Educated",
    author: "Tara Westover ",
    genreid: "12",
    imglink: "https://productimages.worldofbooks.com/1786330512.jpg",
    summary:
      "Educated by Tara Westover is a memoir that recounts the author's upbringing in a strict and isolated Idaho family, where education was discouraged and she experienced abuse. Despite these challenges, Westover taught herself enough to attend college, eventually earning a PhD from Cambridge University. The book explores themes of family, resilience, and the transformative power of education.",
  },
  {
    title: "Hillbilly Elegy",
    author: "J.D. Vance",
    genreid: "12",
    imglink: "https://productimages.worldofbooks.com/802220885X.jpg",
    summary:
      "The Year of Magical Thinking by Joan Didion is a memoir that chronicles the year following the sudden death of the author's husband, writer John Gregory Dunne, and the serious illness of their daughter. Didion reflects on grief, loss, and the nature of memory as she navigates the complexities of mourning while grappling with her own sense of mortality",
  },
  {
    title: "The Year of Magical Thinking",
    author: "Joan Didion",
    genreid: "12",
    imglink: "https://productimages.worldofbooks.com/0007270747.jpg",
    summary:
      "The Year of Magical Thinking by Joan Didion is a memoir that chronicles the year following the sudden death of the author's husband, writer John Gregory Dunne, and the serious illness of their daughter. Didion reflects on grief, loss, and the nature of memory as she navigates the complexities of mourning while grappling with her own sense of mortality.",
  },
  {
    title: "Eat, Pray, Love",
    author: "Elizabeth Gilbert",
    genreid: "12",
    imglink: "https://productimages.worldofbooks.com/1408881446.jpg",
    summary:
      "Eat, Pray, Love by Elizabeth Gilbert is a memoir that follows the author's journey of self-discovery as she travels to Italy, India, and Indonesia after a painful divorce. In each country, Gilbert explores different aspects of her identity and seeks to find balance, meaning, and fulfillment in her life. The book explores themes of spirituality, love, and personal growth.",
  },

  {
    title: "Wild",
    author: "Cheryl Strayed",
    genreid: "12",
    imglink: "https://productimages.worldofbooks.com/1782394869.jpg",
    summary:
      "Wild by Cheryl Strayed is a memoir that recounts the author's solo journey along the Pacific Crest Trail, a 1,100-mile trek from the Mojave Desert to the Pacific Northwest. The journey serves as a physical and emotional challenge for Strayed, who grapples with grief, addiction, and the aftermath of her mother's death. As she confronts the wilderness and her own inner demons, Strayed finds healing, strength, and redemption in the face of adversity.",
  },

  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    genreid: "13",
    imglink: "https://productimages.worldofbooks.com/1471195201.jpg",
    summary:
      "The 7 Habits of Highly Effective People by Stephen R. Covey is a self-help book that outlines seven principles for personal and professional success. Covey encourages readers to adopt a proactive mindset, prioritize important tasks, seek mutual benefit in relationships, and continuously strive for growth and improvement",
  },

  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie ",
    genreid: "13",
    imglink: "https://productimages.worldofbooks.com/9381438706.jpg",
    summary:
      "How to Win Friends and Influence People by Dale Carnegie is a classic self-help book that offers practical advice on building meaningful relationships and enhancing interpersonal skills. Carnegie emphasizes the importance of empathy, active listening, and sincere appreciation in winning people over and achieving success in both personal and professional life.",
  },

  {
    title: "Atomic Habits",
    author: "James Clear",
    genreid: "13",
    imglink: "https://productimages.worldofbooks.com/0735211299.jpg",
    summary:
      "Atomic Habits by James Clear is a guide to building and sustaining positive habits while breaking bad ones. Clear presents actionable strategies for behavior change based on the principles of habit formation and neuroscience. By focusing on small, incremental changes and optimizing daily routines, readers can make lasting improvements to their lives.",
  },

  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genreid: "13",
    imglink: "https://productimages.worldofbooks.com/0062641549.jpg",
    summary:
      "The Subtle Art of Not Giving a F*ck by Mark Manson is a counterintuitive self-help book that challenges conventional wisdom about happiness and success. Manson argues that embracing discomfort, accepting responsibility, and prioritizing values over external validation are key to living a fulfilling life. With humor and candor, he encourages readers to let go of unimportant concerns and focus on what truly matters",
  },

  {
    title: "You Are a Badass",
    author: "Jen Sincero",
    genreid: "13",
    imglink: "https://productimages.worldofbooks.com/1529343763.jpg",
    summary:
      "You Are a Badass by Jen Sincero is a motivational self-help book that encourages readers to overcome self-doubt, fear, and limiting beliefs to unleash their full potential. Sincero shares personal anecdotes and practical exercises to help readers cultivate self-love, confidence, and resilience, empowering them to create the life they desire.",
  },

  {
    title: "Into the Wild",
    author: "Jon Krakauer",
    genreid: "14",
    imglink: "https://productimages.worldofbooks.com/0330351699.jpg",
    summary:
      "Into the Wild by Jon Krakauer is a non-fiction book that tells the story of Christopher McCandless, a young man who abandoned his conventional life to embark on a solo journey into the Alaskan wilderness. Through McCandless's experiences and encounters along the way, Krakauer explores themes of adventure, self-discovery, and the search for meaning in the natural world",
  },

  {
    title: "Eat, Pray, Love",
    author: "Elizabeth Gilbert",
    genreid: "14",
    imglink: "https://productimages.worldofbooks.com/1408881446.jpg",
    summary:
      "Eat, Pray, Love by Elizabeth Gilbert is a memoir that follows the author's journey of self-discovery as she travels to Italy, India, and Indonesia after a painful divorce. In each country, Gilbert explores different aspects of her identity and seeks to find balance, meaning, and fulfillment in her life. The book explores themes of spirituality, love, and personal growth.",
  },

  {
    title: "In Patagonia",
    author: "Bruce Chatwin",
    genreid: "14",
    imglink: "https://productimages.worldofbooks.com/1784872245.jpg",
    summary:
      "In Patagonia by Bruce Chatwin is a travelogue that captures the author's exploration of the remote and rugged region of Patagonia in South America. Chatwin weaves together historical anecdotes, personal reflections, and encounters with local characters to create a vivid portrait of this captivating landscape. Through his travels, he delves into the region's rich cultural heritage and natural beauty, revealing the allure of the unknown and the thrill of adventure.",
  },

  {
    title: "A Walk in the Woods",
    author: "Bill Bryson",
    genreid: "14",
    imglink: "https://productimages.worldofbooks.com/1784161446_thumbnail.jpg",
    summary:
      "A Walk in the Woods by Bill Bryson is a humorous memoir recounting the author's attempt to hike the Appalachian Trail, a challenging 2,200-mile trek stretching from Georgia to Maine. Bryson's journey is filled with mishaps, encounters with wildlife, and humorous observations about the trail and his fellow hikers. Along the way, he reflects on the history, ecology, and conservation efforts of the Appalachian region, offering insights into the beauty and challenges of wilderness exploration.",
  },

  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genreid: "14",
    imglink: "https://productimages.worldofbooks.com/0062390627.jpg",
    summary:
      "The Alchemist by Paulo Coelho is a philosophical novel that follows the journey of Santiago, a young shepherd who sets out to discover his personal legend, or true purpose in life. Along the way, Santiago encounters a series of mentors, challenges, and unexpected opportunities that lead him to realize the importance of following one's dreams and listening to the wisdom of the heart. Through allegory and symbolism, Coelho explores themes of destiny, perseverance, and the transformative power of self-discovery.",
  },

  {
    title: "The Waste Land",
    author: "T.S. Eliot",
    genreid: "15",
    imglink: "https://productimages.worldofbooks.com/0486849066.jpg",
    summary:
      "Milk and Honey by Rupi Kaur is a collection of poetry and prose divided into four chapters: the hurting, the loving, the breaking, and the healing. Through raw and honest language, Kaur explores themes of love, loss, trauma, and resilience. Her poems touch on personal experiences, relationships, and the journey toward self-acceptance and empowerment.",
  },

  {
    title: "Selected Poems",
    author: "Langston Hughes",
    genreid: "15",
    imglink: "https://productimages.worldofbooks.com/1852421274.jpg",
    summary:
      "The Sun and Her Flowers by Rupi Kaur continues the themes explored in Milk and Honey, delving deeper into issues of growth, self-discovery, and healing. Divided into five chapters, the book traces the journey of the sunflower, a symbol of resilience and vitality, as it navigates through darkness and blooms into light. Kaur's poems celebrate the beauty of nature, the complexities of human emotion, and the power of love and self-acceptance.",
  },

  {
    title: "Leaves of Grass",
    author: "Walt Whitman",
    genreid: "15",
    imglink: "https://productimages.worldofbooks.com/1657675114.jpg",
    summary:
      "Leaves of Grass by Walt Whitman is a groundbreaking collection of poetry that celebrates the beauty of the natural world, the diversity of human experience, and the interconnectedness of all life. Whitman's poems are characterized by their free verse style, expansive imagery, and themes of democracy, equality, and the divine in the everyday. Through his lyrical language and profound insights, Whitman invites readers to contemplate the essence of existence and the eternal cycle of life and death.",
  },

  {
    title: "The Sun and Her Flowers",
    author: "Rupi Kaur",
    genreid: "15",
    imglink: "https://productimages.worldofbooks.com/1471165825.jpg",
    summary:
      "Selected Poems by Langston Hughes showcases the powerful voice of one of America's most influential poets of the Harlem Renaissance. Hughes's poems capture the vibrancy and struggles of African American life, addressing themes of identity, social justice, and the quest for freedom. His evocative imagery, rhythmic language, and poignant storytelling illuminate the experiences of individuals grappling with racial prejudice, poverty, and the search for belonging in a divided society.",
  },

  {
    title: "Milk and Honey",
    author: "Rupi Kaur",
    genreid: "15",
    imglink: "https://productimages.worldofbooks.com/144947425X.jpg",
    summary:
      "The Waste Land by T.S. Eliot is a modernist masterpiece that reflects the disillusionment and fragmentation of post-World War I society. Written in five sections, the poem draws on a diverse range of literary and cultural references to explore themes of spiritual emptiness, cultural decay, and the search for redemption. Through its fragmented structure, elusive symbolism, and evocative imagery, The Waste Land reflects the anxieties and uncertainties of a world in transition, offering a haunting portrait of modern life.",
  },

  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    genreid: "16",
    imglink: "https://productimages.worldofbooks.com/1679598066.jpg",
    summary:
      "Romeo and Juliet by William Shakespeare is one of the most famous tragedies in English literature. Set in Verona, Italy, the play tells the story of two young lovers from feuding families: Romeo Montague and Juliet Capulet. Despite the hostility between their families, Romeo and Juliet fall deeply in love and secretly marry. However, their happiness is short-lived as their relationship is plagued by misunderstandings, violence, and ultimately, tragedy. Fueled by a series of unfortunate events and impulsive decisions, Romeo and Juliet's love story ends in their untimely deaths, leading to reconciliation between their warring families.",
  },

  {
    title: "Death of a Salesman",
    author: "Arthur Miller",
    genreid: "16",
    imglink: "https://productimages.worldofbooks.com/1411469518.jpg",
    summary:
      "Death of a Salesman by Arthur Miller is a Pulitzer Prize-winning play that explores the disillusionment and shattered dreams of an aging salesman named Willy Loman. Set in Brooklyn, New York, the play follows Willy's struggles to reconcile his aspirations for success with the harsh realities of his life. As Willy's mental state deteriorates, he becomes increasingly fixated on the past and the notion of achieving the American Dream. Through Willy's interactions with his family, particularly his sons Biff and Happy, Miller examines themes of identity, family dynamics, and the corrosive effects of capitalism on the human spirit",
  },

  {
    title: "A Streetcar Named Desire",
    author: "Tennessee Williams",
    genreid: "16",
    imglink: "https://productimages.worldofbooks.com/0141190272.jpg",
    summary:
      "A Streetcar Named Desire by Tennessee Williams is a classic American drama set in New Orleans. The play revolves around Blanche DuBois, a fading Southern belle who seeks refuge with her sister Stella and her husband Stanley Kowalski after losing her family estate. As tensions escalate between Blanche and Stanley, the play explores themes of desire, illusion, and the clash between the Old South and the New South. Blanche's fragile mental state and her romantic fantasies collide with Stanley's brutish masculinity, leading to a tragic confrontation that exposes the fragility of human relationships and the destructive power of denial.",
  },

  {
    title: "The Crucible",
    author: " by Arthur Miller",
    genreid: "16",
    imglink: "https://productimages.worldofbooks.com/0141182555.jpg",
    summary:
      "The Crucible by Arthur Miller is a powerful drama inspired by the Salem witch trials of 1692. Set in Salem, Massachusetts, the play explores themes of hysteria, paranoia, and the abuse of power. When a group of young girls is caught dancing in the woods, they accuse others in the community of practicing witchcraft, setting off a wave of accusations and trials. As the hysteria spreads, innocent people are condemned and executed, revealing the dangers of mass hysteria and the manipulation of fear for personal gain. Through its exploration of morality and justice, The Crucible remains a compelling commentary on the human capacity for cruelty and the consequences of intolerance.",
  },

  {
    title: "Hamlet",
    author: "William Shakespeare",
    genreid: "16",
    imglink: "https://productimages.worldofbooks.com/033340226X.jpg",
    summary:
      "Hamlet by William Shakespeare is one of the most celebrated tragedies in Western literature. The play follows Prince Hamlet of Denmark as he grapples with the revelation that his father, the king, was murdered by his uncle Claudius, who has since married Hamlet's mother, Queen Gertrude. Consumed by grief, anger, and a sense of duty, Hamlet embarks on a journey of revenge, wrestling with his own moral dilemmas and the complexities of human nature. As the lines between reality and illusion blur, Hamlet confronts themes of madness, betrayal, and the existential struggle for meaning in a world filled with deceit and treachery.",
  },

  {
    title: "Catch-22",
    author: "Joseph Heller",
    genreid: "17",
    imglink: "https://productimages.worldofbooks.com/1411407180.jpg",
    summary:
      "Catch-22 by Joseph Heller is a satirical novel set during World War II. The story follows Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier stationed on the fictional island of Pianosa in the Mediterranean Sea. Yossarian is desperate to escape the war and the absurdities of military bureaucracy, but he finds himself trapped by the infamous catch-22 – a paradoxical rule that states a soldier must be insane to be grounded from combat duty, but requesting to be grounded is considered evidence of sanity, thus making escape impossible. Through a series of darkly comic and surreal episodes, Heller explores themes of the futility of war, the dehumanizing nature of bureaucracy, and the absurdity of human existence.",
  },

  {
    title: "Good Omens",
    author: "Terry Pratchett and Neil Gaiman",
    genreid: "17",
    imglink: "https://productimages.worldofbooks.com/8804712023.jpg",
    summary:
      "Good Omens by Terry Pratchett and Neil Gaiman is a humorous fantasy novel that follows the unlikely partnership between an angel named Aziraphale and a demon named Crowley as they team up to prevent the apocalypse. Set in contemporary England, the story begins with the birth of the Antichrist and the mix-up that leads him to be raised by a normal human family. As the appointed day of Armageddon approaches, Aziraphale and Crowley, who have grown fond of life on Earth, decide to intervene to save humanity. Their efforts are complicated by a colorful cast of characters, including a witch, a witchfinder, and the Four Horsemen of the Apocalypse. With its witty dialogue, irreverent humor, and clever satire, Good Omens offers a fresh take on the age-old battle between good and evil.",
  },

  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genreid: "17",
    imglink: "https://productimages.worldofbooks.com/1529034523.jpg",
    summary:
      "The Hitchhiker's Guide to the Galaxy by Douglas Adams is a comedic science fiction novel that follows the misadventures of Arthur Dent, an ordinary human who is swept off Earth just before it is destroyed to make way for a hyperspace bypass. Rescued by his alien friend Ford Prefect, Arthur embarks on a journey across the galaxy aboard the starship Heart of Gold. Along the way, they encounter a host of eccentric characters, including the two-headed ex-President of the Galaxy, Zaphod Beeblebrox, and the depressed robot Marvin. As they travel, Arthur learns about the absurdity of the universe and the meaning of life from the titular guidebook, which offers humorous and often contradictory advice. Packed with witty dialogue, imaginative world-building, and biting social commentary, The Hitchhiker's Guide to the Galaxy is a beloved classic of science fiction literature.",
  },

  {
    title: "Bridget Jones's Diary",
    author: "Helen Fielding",
    genreid: "17",
    imglink: "https://productimages.worldofbooks.com/1447288939.jpg",
    summary:
      "Bridget Jones's Diary by Helen Fielding is a comedic novel presented in the form of a diary written by the titular character, Bridget Jones. Set in London in the 1990s, the story follows Bridget, a thirty-something single woman who is determined to improve her life by losing weight, quitting smoking, and finding true love. As Bridget navigates the ups and downs of her romantic and professional life, she records her thoughts, feelings, and embarrassing mishaps in her diary, providing readers with a humorous and relatable glimpse into the trials and tribulations of modern womanhood. Filled with witty observations, endearing characters, and laugh-out-loud moments, Bridget Jones's Diary is a delightful romp through the world of love, friendship, and self-discovery.",
  },

  {
    title: "Me Talk Pretty One Day",
    author: "David Sedaris ",
    genreid: "17",
    imglink: "https://productimages.worldofbooks.com/0349113912.jpg",
    summary:
      "Me Talk Pretty One Day by David Sedaris is a collection of autobiographical essays that humorously chronicle the author's experiences growing up in North Carolina, living abroad in France, and navigating the challenges of adulthood. In the first half of the book, Sedaris reflects on his childhood, his relationship with his eccentric family, and his struggles with speech therapy as a young student. In the second half, he recounts his move to France with his partner, Hugh, and his attempts to learn French while dealing with cultural differences and social awkwardness. With his trademark wit, insight, and self-deprecating humor, Sedaris offers readers a candid and entertaining glimpse into his life, inviting them to laugh along with him at the absurdities of the human condition.",
  },

  {
    title: "Animal Farm",
    author: "George Orwell",
    genreid: "18",
    imglink: "https://productimages.worldofbooks.com/0582434475.jpg",
    summary:
      "Animal Farm by George Orwell is a political allegory that uses farm animals to satirize the events leading up to the Russian Revolution of 1917 and the subsequent rise of Stalinism in the Soviet Union. The story follows a group of farm animals who overthrow their human owner and establish their own self-governing society based on the principles of equality and solidarity. However, as the pigs, led by the cunning and power-hungry Napoleon, seize control of the farm and establish a dictatorship, the other animals realize that their revolutionary ideals have been betrayed. Through its vivid characters and incisive commentary, Animal Farm explores themes of power, corruption, and the dangers of totalitarianism.",
  },

  {
    title: "Gulliver's Travels",
    author: "Jonathan Swift",
    genreid: "18",
    imglink: "https://productimages.worldofbooks.com/9390893011.jpg",
    summary:
      "Gulliver's Travels by Jonathan Swift is a classic satirical novel that follows the adventures of Lemuel Gulliver, a ship's surgeon who travels to various fantastical lands, including Lilliput, where he encounters tiny people, and Brobdingnag, where he encounters giants. Along the way, Gulliver encounters societies governed by absurd customs and absurdities, including wars fought over the proper way to crack eggs and debates over the merits of using one end of an egg instead of the other. Through Gulliver's encounters with these strange societies, Swift offers a biting critique of human nature, society, and government, exploring themes of folly, hypocrisy, and the limits of reason.",
  },

  {
    title: "Catch-22",
    author: "Joseph Heller ",
    genreid: "18",
    imglink: "https://productimages.worldofbooks.com/0099529122.jpg",
    summary:
      "Catch-22 by Joseph Heller is a darkly comedic novel set during World War II that follows the experiences of Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier stationed on the fictional island of Pianosa in the Mediterranean Sea. Yossarian is desperate to escape the war and the absurdities of military bureaucracy, but he finds himself trapped by the infamous catch-22 – a paradoxical rule that states a soldier must be insane to be grounded from combat duty, but requesting to be grounded is considered evidence of sanity, thus making escape impossible. Through a series of darkly comic and surreal episodes, Heller explores themes of the futility of war, the dehumanizing nature of bureaucracy, and the absurdity of human existence.",
  },

  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    genreid: "18",
    imglink: "https://productimages.worldofbooks.com/0385333846.jpg",
    summary:
      "Slaughterhouse-Five by Kurt Vonnegut is a semi-autobiographical novel that follows the experiences of Billy Pilgrim, a World War II soldier who becomes unstuck in time and experiences his life out of chronological order. The narrative jumps back and forth between Billy's experiences as a prisoner of war in Dresden, Germany, during the Allied bombing raid that destroyed the city, his post-war life as an optometrist in suburban America, and his abduction by aliens from the planet Tralfamadore. Through Billy's fragmented experiences, Vonnegut explores themes of trauma, free will, and the absurdity of war, offering a unique and thought-provoking perspective on the human condition.",
  },

  {
    title: "The Importance of Being Earnest",
    author: "Oscar Wilde",
    genreid: "18",
    imglink: "https://productimages.worldofbooks.com/1670331016.jpg",
    summary:
      "The Importance of Being Earnest by Oscar Wilde is a witty and satirical play that skewers the hypocrisy and social conventions of Victorian society. The story follows two bachelors, Jack Worthing and Algernon Moncrieff, who lead double lives in order to pursue romantic interests and escape their social obligations. Using mistaken identities, absurd plot twists, and razor-sharp dialogue, Wilde lampoons the superficiality and pretensions of the upper classes, particularly their obsession with appearances and social status. Through its clever wordplay and humorous situations, The Importance of Being Earnest offers a sharp critique of the conventions of its time while providing audiences with plenty of laughs.",
  },

  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genreid: "19",
    imglink: "https://productimages.worldofbooks.com/1407132083.jpg",
    summary:
      "The Hunger Games by Suzanne Collins is a dystopian novel set in a post-apocalyptic world where the government forces children to fight to the death in a televised event called the Hunger Games. The story follows Katniss Everdeen, a young girl who volunteers to take her sister's place in the Games, and her struggle for survival in a brutal and unforgiving arena. As Katniss navigates the challenges of the Games, she also becomes embroiled in a rebellion against the oppressive government, known as the Capitol. Through its action-packed plot and thought-provoking themes of power, survival, and sacrifice, The Hunger Games captivates readers with its suspenseful storytelling and strong social commentary.",
  },

  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genreid: "19",
    imglink: "https://productimages.worldofbooks.com/0141345659.jpg",
    summary:
      "The Fault in Our Stars by John Green is a poignant and heartwarming novel that follows the love story of Hazel Grace Lancaster and Augustus Waters, two teenagers who meet in a cancer support group. Despite their illness, Hazel and Augustus form a deep and meaningful connection, bonding over their shared experiences and dreams. As they embark on a journey to fulfill Hazel's wish to meet her favorite author, their relationship is tested by the realities of their illness and the uncertainty of their future. Through its honest portrayal of love, loss, and the human spirit, The Fault in Our Stars explores themes of resilience, acceptance, and the search for meaning in life.",
  },

  {
    title: "Harry Potter series",
    author: "J.K. Rowling",
    genreid: "19",
    imglink: "https://productimages.worldofbooks.com/1474728626.jpg",
    summary:
      "The Harry Potter series by J.K. Rowling follows the magical adventures of Harry Potter, a young wizard who discovers that he is the chosen one destined to defeat the dark wizard Voldemort. The series begins with Harry's discovery of his magical heritage and his enrollment at Hogwarts School of Witchcraft and Wizardry, where he learns about friendship, courage, and the power of love. As Harry grows older, he and his friends Ron and Hermione confront increasingly dangerous challenges, including battles with dark wizards, magical creatures, and dark forces threatening the wizarding world. Through its richly imagined world, compelling characters, and themes of love, friendship, and the struggle between good and evil, the Harry Potter series has captivated readers of all ages and become one of the most beloved and influential series in modern literature.",
  },

  {
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    genreid: "19",
    imglink: "https://productimages.worldofbooks.com/147111614X.jpg",
    summary:
      "The Perks of Being a Wallflower by Stephen Chbosky is an epistolary novel that follows the experiences of Charlie, a socially awkward and introspective teenager, as he navigates the challenges of high school and adolescence. Through a series of letters to an unnamed friend, Charlie chronicles his struggles with mental health, trauma, and self-discovery, as well as his relationships with his friends and family. Along the way, Charlie forms deep and meaningful connections with his classmates, including the charismatic Sam and her stepbrother Patrick, who introduce him to new experiences and help him come out of his shell. Through its authentic voice and sensitive portrayal of adolescence, The Perks of Being a Wallflower explores themes of friendship, identity, and the search for belonging.",
  },

  {
    title: "To All the Boys I've Loved Before",
    author: "Jenny Han",
    genreid: "19",
    imglink: "https://productimages.worldofbooks.com/1407149075.jpg",
    summary:
      "To All the Boys I've Loved Before by Jenny Han is a charming and heartwarming young adult novel that follows the romantic misadventures of Lara Jean Covey, a high school junior who writes secret love letters to all of her past crushes. When the letters are mysteriously sent out to their recipients, Lara Jean's love life is thrown into chaos as she navigates the fallout and unexpected consequences of her past feelings. As Lara Jean grapples with her newfound attention and the complexities of love and friendship, she learns valuable lessons about honesty, communication, and the importance of being true to herself. Through its relatable characters and sweet romance, To All the Boys I've Loved Before delights readers with its humor, heart, and touching exploration of first love.",
  },

  {
    title: "Where the Wild Things Are",
    author: "Maurice Sendak ",
    genreid: "20",
    imglink: "https://productimages.worldofbooks.com/0099408392.jpg",
    summary:
      "Where the Wild Things Are by Maurice Sendak is a beloved children's picture book about a young boy named Max who goes on a magical adventure to the land of the Wild Things. After being sent to bed without supper, Max's imagination takes flight as he sails to an island inhabited by the Wild Things, strange and whimsical creatures. Max becomes their king and revels in the freedom of the wild, but ultimately realizes that home and family are where he truly belongs. Through its evocative illustrations and timeless story of imagination and belonging, Where the Wild Things Are has enchanted generations of readers.",
  },

  {
    title: "Charlotte's Web",
    author: "E.B. White ",
    genreid: "20",
    imglink: "https://productimages.worldofbooks.com/0064410935.jpg",
    summary:
      "Charlotte's Web by E.B. White is a heartwarming tale of friendship, loyalty, and selflessness. The story follows a young pig named Wilbur who is saved from slaughter by a clever spider named Charlotte. With the help of Charlotte and other barnyard friends, Wilbur learns valuable lessons about life, love, and the importance of kindness. As Charlotte spins webs with messages praising Wilbur, he becomes famous and cherished by the community. However, as Wilbur grows older, Charlotte's health deteriorates, and Wilbur must find a way to save her legacy. Through its gentle humor, poignant themes, and memorable characters, Charlotte's Web is a timeless classic that continues to inspire readers of all ages.",
  },

  {
    title: "Harry Potter series",
    author: "J.K. Rowling",
    genreid: "20",
    imglink: "https://productimages.worldofbooks.com/1408898659.jpg",
    summary:
      "The Harry Potter series by J.K. Rowling follows the magical adventures of Harry Potter, a young wizard who discovers that he is the chosen one destined to defeat the dark wizard Voldemort. The series begins with Harry's discovery of his magical heritage and his enrollment at Hogwarts School of Witchcraft and Wizardry, where he learns about friendship, courage, and the power of love. As Harry grows older, he and his friends Ron and Hermione confront increasingly dangerous challenges, including battles with dark wizards, magical creatures, and dark forces threatening the wizarding world. Through its richly imagined world, compelling characters, and themes of love, friendship, and the struggle between good and evil, the Harry Potter series has captivated readers of all ages and become one of the most beloved and influential series in modern literature.",
  },

  {
    title: "Matilda",
    author: "Roald Dahl",
    genreid: "20",
    imglink: "https://productimages.worldofbooks.com/024155831X.jpg",
    summary:
      "Matilda by Roald Dahl is a charming children's novel about a precocious young girl named Matilda who possesses extraordinary intelligence and telekinetic powers. Despite facing neglect and mistreatment from her parents and the tyrannical headmistress Miss Trunchbull at school, Matilda remains resilient and finds solace in books and learning. With the help of her kind teacher Miss Honey, Matilda discovers the true extent of her abilities and uses them to stand up against injustice and cruelty. Through its witty humor, memorable characters, and empowering message of courage and resilience, Matilda continues to delight readers of all ages and inspire them to embrace their uniqueness and fight for what is right.",
  },

  {
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    genreid: "20",
    imglink: "https://productimages.worldofbooks.com/0241003008.jpg",
    summary:
      "The Very Hungry Caterpillar by Eric Carle is a classic children's picture book that follows the journey of a hungry caterpillar as it eats its way through a variety of foods before transforming into a beautiful butterfly. Each day of the week, the caterpillar consumes different foods, from apples and pears to cakes and sausages, before finally overeating and feeling sick. After resting in a cocoon, the caterpillar emerges as a magnificent butterfly, symbolizing transformation and rebirth. Through its vibrant illustrations, simple narrative, and interactive elements, The Very Hungry Caterpillar has captivated young readers and become a beloved classic in children's literature.",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    genreid: "10",
    imglink: "https://productimages.worldofbooks.com/034914043X.jpg",
    summary:
      "Steve Jobs by Walter Isaacson is a comprehensive biography of the iconic co-founder of Apple Inc., Steve Jobs. The book offers insight into Jobs' complex personality, his visionary leadership style, and his revolutionary approach to technology and design. Drawing from interviews with Jobs himself, as well as interviews with family, friends, and colleagues, Isaacson explores Jobs' early life, his rise to prominence in the tech industry, his successes and failures at Apple, and his enduring legacy as one of the most influential figures in modern technology.o",
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genreid: "10",
    imglink: "https://productimages.worldofbooks.com/0241982979.jpg",
    summary:
      "Becoming by Michelle Obama is a deeply personal memoir that chronicles the life of the former First Lady of the United States. In the book, Obama reflects on her childhood in Chicago, her experiences as a student, her career as a lawyer and public servant, and her role as a wife and mother. With candor and grace, Obama shares her triumphs and challenges, including her time in the White House alongside her husband, Barack Obama. Through her inspiring journey, Obama encourages readers to embrace their own stories and strive for authenticity, purpose, and resilience.",
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genreid: "10",
    imglink: "https://productimages.worldofbooks.com/1407100440.jpg",
    summary:
      "The Diary of a Young Girl by Anne Frank is a poignant and powerful memoir of a young Jewish girl's experience during the Holocaust. Written while Frank and her family were in hiding from the Nazis in Amsterdam, the diary provides a firsthand account of life in hiding, as well as Frank's thoughts, feelings, and dreams. Despite the hardships and dangers she faced, Frank's diary is filled with hope, optimism, and a belief in the goodness of humanity. Through her words, Frank's legacy continues to inspire readers around the world to confront injustice and prejudice and to cherish the values of courage, resilience, and compassion.",
  },
  {
    title: "The Glass Castle",
    author: "Jeannette Walls",
    genreid: "10",
    imglink: "https://productimages.worldofbooks.com/1844081826.jpg",
    summary:
      "The Glass Castle by Jeannette Walls is a memoir that recounts Walls' unconventional and tumultuous upbringing in a nomadic and impoverished family. With parents who were both brilliant and deeply flawed, Walls and her siblings endured poverty, neglect, and instability as they moved from place to place in search of a better life. Despite the hardships, Walls finds strength and resilience in her own determination to overcome her circumstances and build a better future for herself. Through her candid and vivid storytelling, Walls offers a compelling portrait of resilience, forgiveness, and the enduring power of family bonds.",
  },
  {
    title: "Alexander Hamilton",
    author: "Ron Chernow",
    genreid: "10",
    imglink: "https://productimages.worldofbooks.com/1800244398.jpg",
    summary:
      "Alexander Hamilton by Ron Chernow is a biography of one of America's most influential founding fathers, Alexander Hamilton. Chernow delves into Hamilton's remarkable life, from his humble beginnings as an orphaned immigrant to his rise as a key figure in the American Revolution and the founding of the United States. With his brilliant mind, fierce ambition, and tireless work ethic, Hamilton played a pivotal role in shaping the nation's political and economic systems, including the creation of the U.S. financial system and the drafting of the Constitution. Through meticulous research and vivid storytelling, Chernow offers a comprehensive and illuminating portrait of Hamilton's life, legacy, and lasting impact on American history.todo",
  },
];

export { books };
