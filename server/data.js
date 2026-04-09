export default [
  {
    "url": "https://www.youtube.com/watch?v=T-D1OfcDW1M&t=18s",
    "title": "What is Retrieval-Augmented Generation (RAG)?",
    "youtuber": "@IBMTechnology",
    "youtuber_md5": "54a3ba0bb392b04681b070a398b5a9d3",
    "video_url": "https://rr4---sn-4g5ednz7.googlevideo.com/videoplayback?expire=1775178137&ei=Ob3OaY-rD_O9zPsPguKLoAk&ip=r6d7caa07b848709558ccf9c63713f254&id=o-AK6KrcxSPPZLXgKnMKQsN19QIvpxcvCpB8pMmWF_sDOw&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=398&met=1775156537%2C&mh=oi&mm=31&mn=sn-4g5ednz7&ms=au&mv=m&mvi=4&pl=14&rms=au%2Cau&initcwndbps=5373750&bui=AUUZDGKFKbKUw24i-swD2fUkeSmAcPWLmAhk3H0GU8esVRaFL0c_e_Fe-J4gRFfF6Tfm65R_7gAe5V2t&spc=jlWavaXW4W9aLSq_MczHfAncdzIN9hCL3Hf1Gx84reZfeynLF-wtqxgs6bDNvCE2qRAa7f_g&vprv=1&svpuc=1&mime=video%2Fmp4&ns=NVRHQr0E1kS3yJJmIU5gwScT&rqh=1&cnr=14&ratebypass=yes&dur=395.180&lmt=1741706168903568&mt=1775156014&fexp=51565115%2C51565682&c=WEB&sefc=1&txp=5538534&n=vOCqkyq4QihqrFXc0jdF&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AHEqNM4wRAIgOLWV3Yd4JkuyF-1w9UA3k8qToRfSHz_1bWhkp1dPdVICIFXt_TcyZYFqWb4-rra1KkmQTxUnP46uO48nefqfC9Lv&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIgEXZiPmtX7F7AhreEq1egz8Hq-SKhUX7qdD_E2Y5BA5UCIQD8S7Puwf7-xb714WydofQI3iKNizOO9CBa487S3tGFJA%3D%3D",
    "video_length": 395,
    "likes": 41654,
    "views": 1761333,
    "date_posted": "2023-08-23T11:00:32.000Z",
    "description": "Ready to become a certified GenAI engineer? Register now and use code IBMTechYT20 for 20% off of your exam → https://ibm.biz/BdGhCF\nLearn about the technology → https://ibm.biz/BdMsRT\n\nLarge language models usually give great answers, but because they're limited to the training data used to create the model. Over time they can become incomplete--or worse, generate answers that are just plain wrong. One way of improving the LLM results is called \"retrieval-augmented generation\" or RAG. In this video, IBM Senior Research Scientist Marina Danilevsky explains the LLM/RAG framework and how this combination delivers two big advantages, namely: the model gets the most up-to-date and trustworthy facts, and you can see where the model got its info, lending more credibility to what it generates.\n\nGet weekly AI, cloud, security and sustainability industry news, events and insights. → https://ibm.biz/BdK6UY",
    "num_comments": 946,
    "subscribers": 1630000,
    "video_id": "T-D1OfcDW1M",
    "channel_url": "https://www.youtube.com/@IBMTechnology",
    "preview_image": "https://i.ytimg.com/vi_webp/T-D1OfcDW1M/maxresdefault.webp",
    "shortcode": "T-D1OfcDW1M",
    "verified": true,
    "handle_name": "IBM Technology",
    "avatar_img_channel": "https://yt3.ggpht.com/7qCmNHAsFvD6RSINuJ1WoGZYoKmm7TDnhORKFqLb8QoeOFh2qFXal8brkzoxNrwqmJTuvOLs=s48-c-k-c0x00ffffff-no-rj",
    "is_sponsored": false,
    "related_videos": null,
    "license": null,
    "viewport_frames": "640x360 / -",
    "current_optimal_res": "640x360@30 / 640x360@30",
    "codecs": "avc1.42001E, mp4a.40.2 / mp4a.40.2",
    "color": "bt709",
    "quality": "hd1080",
    "quality_label": "1080p",
    "post_type": "post",
    "youtuber_id": "UCKWaEZ-_VweaEx1j62do_vQ",
    "transcript": "Large language models. They are everywhere. They get some things amazingly right and other things very interestingly wrong. My name is Marina Danilevsky. I am a Senior Research Scientist here at IBM Research. And I want to tell you about a framework to help large language models be more accurate and more up to date: Retrieval-Augmented Generation, or RAG. Let's just talk about the \"Generation\" part for a minute. So forget the \"Retrieval-Augmented\". So the generation, this refers to large language models, or LLMs, that generate text in response to a user query, referred to as a prompt. These models can have some undesirable behavior. I want to tell you an anecdote to illustrate this. So my kids, they recently asked me this question: \"In our solar system, what planet has the most moons?\" And my response was, “Oh, that's really great that you're asking this question. I loved space when I was your age.” Of course, that was like 30 years ago. But I know this! I read an article and the article said that it was Jupiter and 88 moons. So that's the answer. Now, actually, there's a couple of things wrong with my answer. First of all, I have no source to support what I'm saying. So even though I confidently said “I read an article, I know the answer!”, I'm not sourcing it. I'm giving the answer off the top of my head. And also, I actually haven't kept up with this for awhile, and my answer is out of date. So we have two problems here. One is no source. And the second problem is that I am out of date.   And these, in fact, are two behaviors that are often observed as problematic when interacting with large language models. They’re LLM challenges. Now, what would have happened if I'd taken a beat and first gone and looked up the answer on a reputable source like NASA? Well, then I would have been able to say, “Ah, okay! So the answer is Saturn with 146 moons.” And in fact, this keeps changing because scientists keep on discovering more and more moons. So I have now grounded my answer in something more \nbelievable. I have not hallucinated or made up an answer. Oh, by the way, I didn't leak personal information about how long ago it's been since I was obsessed with space. All right, so what does this have to do with large language models? Well, how would a large language model have answered this question? So let's say that I have a user asking this question about moons. A large language model would confidently say, OK, I have been trained and from what I know in my parameters during my training, the answer is Jupiter. The answer is wrong. But, you know, we don't know. The large language model is very confident in what it answered. Now, what happens when you add this retrieval augmented part here? What does that mean? That means that now, instead of just relying on what the LLM knows, we are adding a content store. This could be open like the internet. This can be closed like some collection of documents, collection of policies, whatever. The point, though, now is that the LLM first goes and talks to the content store and says, “Hey, can you retrieve for me information that is relevant to what the user's query was?” And now, with this retrieval-augmented answer, it's not Jupiter anymore. We know that it is Saturn. What does this look like? Well, first user prompts the LLM with their question. They say, this is what my question was. And originally, if we're just talking to a generative model, the generative model says, “Oh, okay, I know the response. Here it is. Here's my response.”   But now in the RAG framework, the generative model actually has an instruction that says, \"No, no, no.\" \"First, go and retrieve relevant content.\" \"Combine that with the user's question and only then generate the answer.\" So the prompt now has three parts: the instruction to pay attention to, the retrieved content, together with the user's question. Now give a response. And in fact, now you can give evidence for why your response was what it was.   So now hopefully you can see, how does RAG help the two LLM challenges that I had mentioned before?   So first of all, I'll start with the out of date part. Now, instead of having to retrain your model, if new information comes up, like, hey, we found some more moons-- now to Jupiter again, maybe it'll be Saturn again in the future. All you have to do is you augment your data store with new information, update information. So now the next time that a user comes and asks the question, we're ready. We just go ahead and retrieve the most up to date information. The second problem, source. Well, the large language model is now being instructed to pay attention to primary source data before giving its response. And in fact, now being able to give evidence. This makes it less likely to hallucinate or to leak data because it is less likely to rely only on information that it learned during training. It also allows us to get the model to have a behavior that can be very positive, which is knowing when to say, “I don't know.” If the user's question cannot be reliably answered based on your data store, the model should say, \"I don't know,\" instead of making up something that is believable and may mislead the user. This can have a negative effect as well though, because if the retriever is not sufficiently good to give the large language model the best, most high-quality grounding information, then maybe the user's query that is answerable doesn't get an answer. So this is actually why lots of folks, including many of us here at IBM, are working the problem on both sides. We are both working to improve the retriever to give the large language model the best quality data on which to ground its response, and also the generative part so that the LLM can give the richest, best response finally to the user when it generates the answer. Thank you for learning more about RAG and like and subscribe to the channel. Thank you.",
    "formatted_transcript": [
      {
        "start_time": 60,
        "end_time": 2632,
        "duration": 2572,
        "text": "Large language models. They are everywhere."
      },
      {
        "start_time": 2632,
        "end_time": 5267,
        "duration": 2635,
        "text": "They get some things amazingly right"
      },
      {
        "start_time": 5267,
        "end_time": 7741,
        "duration": 2474,
        "text": "and other things very interestingly wrong."
      },
      {
        "start_time": 7819,
        "end_time": 9578,
        "duration": 1759,
        "text": "My name is Marina Danilevsky."
      },
      {
        "start_time": 9578,
        "end_time": 12236,
        "duration": 2658,
        "text": "I am a Senior Research Scientist here at IBM Research."
      },
      {
        "start_time": 12314,
        "end_time": 16549,
        "duration": 4235,
        "text": "And I want to tell you about a framework to help large language models"
      },
      {
        "start_time": 16549,
        "end_time": 18647,
        "duration": 2098,
        "text": "be more accurate and more up to date:"
      },
      {
        "start_time": 18648,
        "end_time": 21900,
        "duration": 3252,
        "text": "Retrieval-Augmented Generation, or RAG."
      },
      {
        "start_time": 22680,
        "end_time": 24784,
        "duration": 2104,
        "text": "Let's just talk about the \"Generation\" part for a minute."
      },
      {
        "start_time": 24784,
        "end_time": 26709,
        "duration": 1925,
        "text": "So forget the \"Retrieval-Augmented\"."
      },
      {
        "start_time": 26800,
        "end_time": 31077,
        "duration": 4277,
        "text": "So the generation, this refers to large language models, or LLMs,"
      },
      {
        "start_time": 31077,
        "end_time": 35809,
        "duration": 4732,
        "text": "that generate text in response to a user query, referred to as a prompt."
      },
      {
        "start_time": 36000,
        "end_time": 38269,
        "duration": 2269,
        "text": "These models can have some undesirable behavior."
      },
      {
        "start_time": 38269,
        "end_time": 41284,
        "duration": 3015,
        "text": "I want to tell you an anecdote to illustrate this."
      },
      {
        "start_time": 41284,
        "end_time": 44440,
        "duration": 3156,
        "text": "So my kids, they recently asked me this question:"
      },
      {
        "start_time": 44440,
        "end_time": 48530,
        "duration": 4090,
        "text": "\"In our solar system, what planet has the most moons?\""
      },
      {
        "start_time": 48713,
        "end_time": 55748,
        "duration": 7035,
        "text": "And my response was, “Oh, that's really great that you're asking this question. I loved space when I was your age.”"
      },
      {
        "start_time": 55748,
        "end_time": 58074,
        "duration": 2326,
        "text": "Of course, that was like 30 years ago."
      },
      {
        "start_time": 58074,
        "end_time": 60924,
        "duration": 2850,
        "text": "But I know this! I read an article"
      },
      {
        "start_time": 60924,
        "end_time": 66234,
        "duration": 5310,
        "text": "and the article said that it was Jupiter and 88 moons. So that's the answer."
      },
      {
        "start_time": 66234,
        "end_time": 69994,
        "duration": 3760,
        "text": "Now, actually, there's a couple of things wrong with my answer."
      },
      {
        "start_time": 70380,
        "end_time": 74026,
        "duration": 3646,
        "text": "First of all, I have no source to support what I'm saying."
      },
      {
        "start_time": 74026,
        "end_time": 78232,
        "duration": 4206,
        "text": "So even though I confidently said “I read an article, I know the answer!”, I'm not sourcing it."
      },
      {
        "start_time": 78232,
        "end_time": 80592,
        "duration": 2360,
        "text": "I'm giving the answer off the top of my head."
      },
      {
        "start_time": 80592,
        "end_time": 85260,
        "duration": 4668,
        "text": "And also, I actually haven't kept up with this for awhile, and my answer is out of date."
      },
      {
        "start_time": 86100,
        "end_time": 93000,
        "duration": 6900,
        "text": "So we have two problems here. One is no source. And the second problem is that I am out of date.  "
      },
      {
        "start_time": 95400,
        "end_time": 101916,
        "duration": 6516,
        "text": "And these, in fact, are two behaviors that are often observed as problematic"
      },
      {
        "start_time": 101916,
        "end_time": 106288,
        "duration": 4372,
        "text": "when interacting with large language models. They’re LLM challenges."
      },
      {
        "start_time": 106288,
        "end_time": 110462,
        "duration": 4174,
        "text": "Now, what would have happened if I'd taken a beat and first gone"
      },
      {
        "start_time": 110462,
        "end_time": 114180,
        "duration": 3718,
        "text": "and looked up the answer on a reputable source like NASA?"
      },
      {
        "start_time": 115380,
        "end_time": 123252,
        "duration": 7872,
        "text": "Well, then I would have been able to say, “Ah, okay! So the answer is Saturn with 146 moons.”"
      },
      {
        "start_time": 123252,
        "end_time": 128084,
        "duration": 4832,
        "text": "And in fact, this keeps changing because scientists keep on discovering more and more moons."
      },
      {
        "start_time": 128085,
        "end_time": 131013,
        "duration": 2928,
        "text": "So I have now grounded my answer in something more \nbelievable."
      },
      {
        "start_time": 131091,
        "end_time": 133082,
        "duration": 1991,
        "text": "I have not hallucinated or made up an answer."
      },
      {
        "start_time": 133082,
        "end_time": 138453,
        "duration": 5371,
        "text": "Oh, by the way, I didn't leak personal information about how long ago it's been since I was obsessed with space."
      },
      {
        "start_time": 138753,
        "end_time": 142065,
        "duration": 3312,
        "text": "All right, so what does this have to do with large language models?"
      },
      {
        "start_time": 142065,
        "end_time": 146496,
        "duration": 4431,
        "text": "Well, how would a large language model have answered this question?"
      },
      {
        "start_time": 146496,
        "end_time": 151620,
        "duration": 5124,
        "text": "So let's say that I have a user asking this question about moons."
      },
      {
        "start_time": 151790,
        "end_time": 157920,
        "duration": 6130,
        "text": "A large language model would confidently say,"
      },
      {
        "start_time": 157921,
        "end_time": 165000,
        "duration": 7079,
        "text": "OK, I have been trained and from what I know in my parameters during my training, the answer is Jupiter."
      },
      {
        "start_time": 166680,
        "end_time": 170230,
        "duration": 3550,
        "text": "The answer is wrong. But, you know, we don't know."
      },
      {
        "start_time": 170231,
        "end_time": 172829,
        "duration": 2598,
        "text": "The large language model is very confident in what it answered."
      },
      {
        "start_time": 172946,
        "end_time": 177688,
        "duration": 4742,
        "text": "Now, what happens when you add this retrieval augmented part here?"
      },
      {
        "start_time": 177688,
        "end_time": 179125,
        "duration": 1437,
        "text": "What does that mean?"
      },
      {
        "start_time": 179216,
        "end_time": 182892,
        "duration": 3676,
        "text": "That means that now, instead of just relying on what the LLM knows,"
      },
      {
        "start_time": 182892,
        "end_time": 185373,
        "duration": 2481,
        "text": "we are adding a content store."
      },
      {
        "start_time": 185556,
        "end_time": 187756,
        "duration": 2200,
        "text": "This could be open like the internet."
      },
      {
        "start_time": 187756,
        "end_time": 194124,
        "duration": 6368,
        "text": "This can be closed like some collection of documents, collection of policies, whatever."
      },
      {
        "start_time": 194124,
        "end_time": 197765,
        "duration": 3641,
        "text": "The point, though, now is that the LLM first goes and talks"
      },
      {
        "start_time": 197766,
        "end_time": 202459,
        "duration": 4693,
        "text": "to the content store and says, “Hey, can you retrieve for me"
      },
      {
        "start_time": 202800,
        "end_time": 205741,
        "duration": 2941,
        "text": "information that is relevant to what the user's query was?”"
      },
      {
        "start_time": 205845,
        "end_time": 211948,
        "duration": 6103,
        "text": "And now, with this retrieval-augmented answer, it's not Jupiter anymore."
      },
      {
        "start_time": 211948,
        "end_time": 215612,
        "duration": 3664,
        "text": "We know that it is Saturn. What does this look like?"
      },
      {
        "start_time": 215613,
        "end_time": 226339,
        "duration": 10726,
        "text": "Well, first user prompts the LLM with their question."
      },
      {
        "start_time": 226482,
        "end_time": 228394,
        "duration": 1912,
        "text": "They say, this is what my question was."
      },
      {
        "start_time": 228395,
        "end_time": 231978,
        "duration": 3583,
        "text": "And originally, if we're just talking to a generative model,"
      },
      {
        "start_time": 232260,
        "end_time": 237167,
        "duration": 4907,
        "text": "the generative model says, “Oh, okay, I know the response. Here it is. Here's my response.”  "
      },
      {
        "start_time": 237600,
        "end_time": 240303,
        "duration": 2703,
        "text": "But now in the RAG framework,"
      },
      {
        "start_time": 240303,
        "end_time": 244318,
        "duration": 4015,
        "text": "the generative model actually has an instruction that says, \"No, no, no.\""
      },
      {
        "start_time": 244318,
        "end_time": 248515,
        "duration": 4197,
        "text": "\"First, go and retrieve relevant content.\""
      },
      {
        "start_time": 248660,
        "end_time": 253366,
        "duration": 4706,
        "text": "\"Combine that with the user's question and only then generate the answer.\""
      },
      {
        "start_time": 253549,
        "end_time": 257659,
        "duration": 4110,
        "text": "So the prompt now has three parts:"
      },
      {
        "start_time": 257659,
        "end_time": 263133,
        "duration": 5474,
        "text": "the instruction to pay attention to, the retrieved content, together with the user's question."
      },
      {
        "start_time": 263318,
        "end_time": 269455,
        "duration": 6137,
        "text": "Now give a response. And in fact, now you can give evidence for why your response was what it was.  "
      },
      {
        "start_time": 270000,
        "end_time": 275340,
        "duration": 5340,
        "text": "So now hopefully you can see, how does RAG help the two LLM challenges that I had mentioned before?  "
      },
      {
        "start_time": 275940,
        "end_time": 278604,
        "duration": 2664,
        "text": "So first of all, I'll start with the out of date part."
      },
      {
        "start_time": 278604,
        "end_time": 283224,
        "duration": 4620,
        "text": "Now, instead of having to retrain your model, if new information comes up, like,"
      },
      {
        "start_time": 283224,
        "end_time": 288123,
        "duration": 4899,
        "text": "hey, we found some more moons-- now to Jupiter again, maybe it'll be Saturn again in the future."
      },
      {
        "start_time": 288227,
        "end_time": 293189,
        "duration": 4962,
        "text": "All you have to do is you augment your data store with new information, update information."
      },
      {
        "start_time": 293189,
        "end_time": 297686,
        "duration": 4497,
        "text": "So now the next time that a user comes and asks the question, we're ready."
      },
      {
        "start_time": 297686,
        "end_time": 300291,
        "duration": 2605,
        "text": "We just go ahead and retrieve the most up to date information."
      },
      {
        "start_time": 300291,
        "end_time": 302258,
        "duration": 1967,
        "text": "The second problem, source."
      },
      {
        "start_time": 302259,
        "end_time": 307435,
        "duration": 5176,
        "text": "Well, the large language model is now being instructed to pay attention"
      },
      {
        "start_time": 307435,
        "end_time": 310984,
        "duration": 3549,
        "text": "to primary source data before giving its response."
      },
      {
        "start_time": 310984,
        "end_time": 313711,
        "duration": 2727,
        "text": "And in fact, now being able to give evidence."
      },
      {
        "start_time": 313711,
        "end_time": 317361,
        "duration": 3650,
        "text": "This makes it less likely to hallucinate or to leak data"
      },
      {
        "start_time": 317361,
        "end_time": 321487,
        "duration": 4126,
        "text": "because it is less likely to rely only on information that it learned during training."
      },
      {
        "start_time": 321761,
        "end_time": 326580,
        "duration": 4819,
        "text": "It also allows us to get the model to have a behavior that can be very positive,"
      },
      {
        "start_time": 326580,
        "end_time": 329419,
        "duration": 2839,
        "text": "which is knowing when to say, “I don't know.”"
      },
      {
        "start_time": 329420,
        "end_time": 335362,
        "duration": 5942,
        "text": "If the user's question cannot be reliably answered based on your data store,"
      },
      {
        "start_time": 335362,
        "end_time": 341900,
        "duration": 6538,
        "text": "the model should say, \"I don't know,\" instead of making up something that is believable and may mislead the user."
      },
      {
        "start_time": 341900,
        "end_time": 347578,
        "duration": 5678,
        "text": "This can have a negative effect as well though, because if the retriever is not sufficiently good"
      },
      {
        "start_time": 347578,
        "end_time": 353062,
        "duration": 5484,
        "text": "to give the large language model the best, most high-quality grounding information,"
      },
      {
        "start_time": 353062,
        "end_time": 357287,
        "duration": 4225,
        "text": "then maybe the user's query that is answerable doesn't get an answer."
      },
      {
        "start_time": 357287,
        "end_time": 361469,
        "duration": 4182,
        "text": "So this is actually why lots of folks, including many of us here at IBM,"
      },
      {
        "start_time": 361469,
        "end_time": 363576,
        "duration": 2107,
        "text": "are working the problem on both sides."
      },
      {
        "start_time": 363576,
        "end_time": 366759,
        "duration": 3183,
        "text": "We are both working to improve the retriever"
      },
      {
        "start_time": 366760,
        "end_time": 372892,
        "duration": 6132,
        "text": "to give the large language model the best quality data on which to ground its response,"
      },
      {
        "start_time": 372892,
        "end_time": 379238,
        "duration": 6346,
        "text": "and also the generative part so that the LLM can give the richest, best response finally to the user"
      },
      {
        "start_time": 379238,
        "end_time": 380947,
        "duration": 1709,
        "text": "when it generates the answer."
      },
      {
        "start_time": 381103,
        "end_time": 385679,
        "duration": 4576,
        "text": "Thank you for learning more about RAG and like and subscribe to the channel."
      },
      {
        "start_time": 385679,
        "end_time": 386219,
        "duration": 540,
        "text": "Thank you."
      }
    ],
    "hashtags": null,
    "tags": [
      "IBM",
      "IBM Cloud",
      "AI",
      "Artificial Intelligence",
      "LLM",
      "LLMs",
      "Large Language Models",
      "RAG",
      "Retrieval Augmented Generation",
      "Retrieval-Augmented Generation",
      "Retriever-Augmented Generation",
      "Foundation Models",
      "GPT"
    ],
    "next_recommended_videos": [
      {
        "url": "https://www.youtube.com/redirect?event=endscreen&redir_token=QUFFLUhqbjFaeUQtbHdzbW1ORDRkeVkyUGdqbmtROGFTUXxBQ3Jtc0ttNXlFR0dfeXVKang3MjFsMGxpc1U2b0RsM1h4czJzVEM3M1hMRzk4Z01TdC1mb1h0TzlXZlEyR0tEX1JQMTJkVGhQUVFrdzh5RXRWa21MZ05xbXBCejZPWWZFU2dGYmJPajZkVkNxR0dyeExtMDIwTQ&q=https%3A%2F%2Fibm.biz%2FBdMsRT",
        "title": "Try RAG for yourself, website. Visit. ibm.biz",
        "thumbnail": "https://i.ytimg.com/an/T-D1OfcDW1M/4309889703992905138_mq.jpg?v=64e4e936",
        "startMs": 375128,
        "endMs": 395128,
        "style": "WEBSITE"
      },
      {
        "url": "https://www.youtube.com/watch?v=3iGWMImiGjU",
        "title": "Build a Chatbot with AI in 5 minutes, video",
        "thumbnail": "https://i.ytimg.com/vi/3iGWMImiGjU/maxresdefault.jpg",
        "startMs": 379847,
        "endMs": 395128,
        "style": "VIDEO"
      },
      {
        "url": "https://www.youtube.com/watch?v=UabBYexBD4k",
        "title": "Is RAG Still Needed? Choosing the Best Approach for LLMs, video",
        "thumbnail": "https://i.ytimg.com/vi_webp/UabBYexBD4k/maxresdefault.webp",
        "startMs": 379723,
        "endMs": 395128,
        "style": "VIDEO"
      },
      {
        "url": "https://www.youtube.com/watch?v=gUrENDkPw_k",
        "title": "How to Build a Multi Agent AI System, video",
        "thumbnail": "https://i.ytimg.com/vi_webp/gUrENDkPw_k/maxresdefault.webp",
        "startMs": 380153,
        "endMs": 395128,
        "style": "VIDEO"
      }
    ],
    "recommended_videos": [
      {
        "url": "https://www.youtube.com/watch?v=UabBYexBD4k",
        "title": "Is RAG Still Needed? Choosing the Best Approach for LLMs",
        "thumbnail": "https://i.ytimg.com/vi/UabBYexBD4k/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDCna93ZNKrD5duWrvKje8hNJ5sHw"
      },
      {
        "url": "https://www.youtube.com/watch?v=swvzKSOEluc&pp=ugUHEgVlbi1HQg%3D%3D",
        "title": "RAG Crash Course for Beginners",
        "thumbnail": "https://i.ytimg.com/vi/swvzKSOEluc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDSGuIDYGgAEYZxQ_Br9EjpddAoWw"
      },
      {
        "url": "https://www.youtube.com/watch?v=KJtZARuO3JY&pp=ugUEEgJlbg%3D%3D",
        "title": "Visualizing transformers and attention | Talk for TNG Big Tech Day '24",
        "thumbnail": "https://i.ytimg.com/vi/KJtZARuO3JY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqrI4yh06-SNT9Ygodxsm7Gt516g"
      },
      {
        "url": "https://www.youtube.com/watch?v=X95MFcYH1_s",
        "title": "MCP vs. RAG: How AI Agents & LLMs Connect to Data",
        "thumbnail": "https://i.ytimg.com/vi/X95MFcYH1_s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBBStEXB1sxv7VmPxt4fcBKqSbjdA"
      },
      {
        "url": "https://www.youtube.com/watch?v=of4UDMvi2Kw",
        "title": "A Helping Hand for LLMs (Retrieval Augmented Generation) - Computerphile",
        "thumbnail": "https://i.ytimg.com/vi/of4UDMvi2Kw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCUrFCMXRKIiOJduHtdZo2X0jvD_w"
      },
      {
        "url": "https://www.youtube.com/watch?v=DmZYp56VkcY&pp=0gcJCdkKAYcqIYzv",
        "title": "Trump's about to make two fatal mistakes in Iran | John Bolton",
        "thumbnail": "https://i.ytimg.com/vi/DmZYp56VkcY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBzMKU8dBbA8vb92D-_DaE7Pe8pAw"
      },
      {
        "url": "https://www.youtube.com/watch?v=KZeIEiBrT_w",
        "title": "The Strange Math That Predicts (Almost) Anything",
        "thumbnail": "https://i.ytimg.com/vi/KZeIEiBrT_w/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7nnwAwleVLjbDZyzmdA5nSitR7A"
      },
      {
        "url": "https://www.youtube.com/watch?v=wzssm02u35I&pp=ugUHEgVlbi1VUw%3D%3D",
        "title": "Simplest RAG Explanation with Working Code! Beginner Friendly Step-by-Step Example",
        "thumbnail": "https://i.ytimg.com/vi/wzssm02u35I/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBqRm8zdy8X6_VFidAfYsr1UyCHwQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=zYGDpG-pTho&pp=0gcJCdkKAYcqIYzv",
        "title": "RAG vs Fine-Tuning vs Prompt Engineering: Optimizing AI Models",
        "thumbnail": "https://i.ytimg.com/vi/zYGDpG-pTho/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCg06JnunPNDCDj73iJfu2v2Xklcg"
      },
      {
        "url": "https://www.youtube.com/watch?v=KsiuA5gOl1o&pp=0gcJCdkKAYcqIYzv",
        "title": "I Hacked This Temu Router. What I Found Should Be Illegal.",
        "thumbnail": "https://i.ytimg.com/vi/KsiuA5gOl1o/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqNH0tbblkRM3JALyKXWeuhTBGUw"
      },
      {
        "url": "https://www.youtube.com/watch?v=vIO1krG2-tE",
        "title": "The Entire History of Iran in 20 Minutes",
        "thumbnail": "https://i.ytimg.com/vi/vIO1krG2-tE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCe97iNOA9uxo5AopmRMoUVhpqHig"
      },
      {
        "url": "https://www.youtube.com/watch?v=gl1r1XV0SLw",
        "title": "What is a Vector Database? Powering Semantic Search & AI Applications",
        "thumbnail": "https://i.ytimg.com/vi/gl1r1XV0SLw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDfqtvlXT36pMMWpvTElZ5MOFQ7Jg"
      }
    ],
    "transcript_language": [
      {
        "language": "English",
        "auto_translate": false
      }
    ],
    "chapters": null,
    "transcription_language": "English",
    "is_age_restricted": false,
    "channel_url_decoded": "https://www.youtube.com/@IBMTechnology",
    "timestamp": "2026-04-02T19:02:45.474Z",
    "input": {
      "url": "https://www.youtube.com/watch?v=T-D1OfcDW1M&t=18s",
      "transcription_language": "English",
      "country": ""
    }
  },
  {
    "url": "https://www.youtube.com/watch?v=zW9o8q2fXfM",
    "title": "Is Learning to Code Still Worth It in 2026?",
    "youtuber": "@MarinaWyssAI",
    "youtuber_md5": "993e35b58f724e2b0b0f4a6c8352f604",
    "video_url": "https://rr8---sn-gwpa-25ue7.googlevideo.com/videoplayback?expire=1775683168&ei=AHLWae3BArfg1d8Pkv2wMA&ip=rd4d548e67cf774f2e8f3a9bcf093c3f5&id=o-AMVgZ4GGHhUYr-1TAhTo9343l16zaC41iYu-jWmRHnbv&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=354&met=1775661568%2C&mh=YA&mm=31%2C29&mn=sn-gwpa-25ue7%2Csn-gwpa-qxak&ms=au%2Crdu&mv=m&mvi=8&pl=24&rms=au%2Cau&initcwndbps=1103750&bui=AUUZDGKniRgqb-np2Y5WDo2o7N3Roml5U3inBB3ih5ymK4S6Mz2p0Ijj8xue8XbPRF58zNr2LmvN-znH&spc=jlWavXqCQnofmuODxN52SvoQ0ddj8JBWI-SpG2TCfdeNSG-ZdLzRf2ddEvEPiK7mvd0ODejP&vprv=1&svpuc=1&mime=video%2Fmp4&ns=e6fF0BXu7c5J59u3zs6BdZcU&rqh=1&gir=yes&clen=31772749&ratebypass=yes&dur=721.560&lmt=1774119416891545&mt=1775661195&fvip=3&fexp=51565115%2C51565682%2C51869321&c=WEB&sefc=1&txp=4438534&n=qAD1Wt-ywPbl_I3eP&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AHEqNM4wRgIhAKajPlWkKOLvZc4lHdpc21GiT_B2pTcDh20HUl9zTf54AiEAqhCHcI2I8Z1dichN2huvza1b2Sh_wpNTqOgIAIK_wcw%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhALG3hWMOjNdBUFQZe8V8E0wUQOm-_ME11CbSmnBgTo-_AiBN0dZtLyxyigDpgKeKXbHSPDbnDEAzfyCL4LuhuigdAA%3D%3D",
    "video_length": 722,
    "likes": 2403,
    "views": 53435,
    "date_posted": "2026-03-24T14:01:33.000Z",
    "description": "Check out Verdent here! https://www.verdent.ai/?id=700563\n\nTimestamps ⏰\n00:00 Should you still learn to code?\n03:29 What coding jobs look like now\n06:09 What actually matters in the job market of 2026\n08:02 What if AI gets WAY BETTER soon?\n08:40 Why learn when I can vibe code?\n09:05 What’s the point if the job market is impossible anyway?\n09:32 How to learn the right way\n----------------------------------------\nWant to become an AI Engineer? Download my AI Engineering Skills Checklist here: https://www.gratitudedriven.com/c/ai-engineering-checklist\n\n🚀 Want to level up your AI/ML career? Join the AI/ML Career Launchpad community! https://aiml-career-launchpad.circle.so/aiml-launchpad\n\n💬 Interested in working with me 1:1? Learn more about my strategic advisory sessions: https://www.marinawyss.com/coaching\n\n🩷 Join the channel membership community for priority comment replies and early access to videos! https://www.youtube.com/@MarinaWyssAI/join\n\n☕ If you'd like to support my work, you can buy me a coffee (thank you!): https://ko-fi.com/marinawyss \n----------------------------------------\n🎥 Other videos you might like:\n\nPython for Machine Learning: Skills That Actually Get You Hired (Complete Roadmap!)\nhttps://www.youtube.com/watch?v=jEJD8M6rNoo&t=1s\n\n99% Of People Don't Know The RIGHT WAY to Code with AI\nhttps://www.youtube.com/watch?v=dzinqNTacbc&t=1s\n\nHow to Get Your First AI Engineering Job (skills, projects, resumes, and more)\nhttps://www.youtube.com/watch?v=UxVM1xDBdt4&t=459s\n\nDon't Bother Applying to Data Science Jobs in 2025 (Do THIS Instead)\nhttps://www.youtube.com/watch?v=--mrLGTQ6TQ\n----------------------------------------\n🦫 About me\nI am a Senior Applied Scientist (basically, a blend of Data Scientist/Machine Learning Engineer) at Twitch/Amazon. Outside of my full-time job I'm a 1:1 career coach for people looking to break into the field, with a focus on those from non-traditional backgrounds. \n\nI’m also a Certified Personal Trainer, always busy with too many interests, and really, deeply happy with my life. I hope to be able to help others achieve these things, too. \n----------------------------------------\n✉️ Contact\nInstagram (non-tech): https://www.instagram.com/marina.wyss/\nTwitter/X (non-tech): https://x.com/iammarinawyss\nTikTok (non-tech): https://www.tiktok.com/@gratitudedriven\nLeave me a comment here on YouTube!\nBusiness email: business@gratitudedriven.com\n----------------------------------------\n⚖️ Disclaimer\nThe views and opinions expressed in this video are my own and do not reflect the official policy or position of Twitch/Amazon or any other company I have worked for. All advice and insights shared here are based on my personal experiences and should be considered as such.\n\nThank you to Verdent for sponsoring this video!\n@verdent_ai \nhttps://www.youtube.com/@verdent_ai\n\nThis description may contain affiliate links. If you make a purchase I may make a small commission at no cost to you.\n\n#learntocode2026 #Verdent #VerdentAI #AIcoding #vibecoding",
    "num_comments": 278,
    "subscribers": 131000,
    "video_id": "zW9o8q2fXfM",
    "channel_url": "https://www.youtube.com/@MarinaWyssAI",
    "preview_image": "https://i.ytimg.com/vi/zW9o8q2fXfM/maxresdefault.jpg",
    "shortcode": "zW9o8q2fXfM",
    "verified": false,
    "handle_name": "Marina Wyss - AI & Machine Learning",
    "avatar_img_channel": "https://yt3.ggpht.com/IXHMIN2j4jNKdNMALWVtxi4b0h3_6d-QXMdmQpqAmyxLkrAL6zoAQgsLpr5j7GQWCfJvSyJYfg=s48-c-k-c0x00ffffff-no-rj",
    "is_sponsored": true,
    "related_videos": null,
    "license": null,
    "viewport_frames": "640x360 / -",
    "current_optimal_res": "640x360@24 / 640x360@24",
    "codecs": "avc1.42001E, mp4a.40.2 / mp4a.40.2",
    "color": "bt709",
    "quality": "hd2160",
    "quality_label": "2160p",
    "post_type": "post",
    "youtuber_id": "UCZf_9SblvM8iTTkouFEcHtA",
    "transcript": "I'm a senior applied scientist at Amazon where I build production machine learning systems and I don't write code anymore. AI writes virtually every line I commit. So here's the uncomfortable question I keep getting and honestly the question I've been asking myself. If someone like me doesn't actually write code anymore. Is it too late for you to learn? Last year if you'd asked me I would have been totally confident that AI coding tools just aren't there yet? And I was skeptical if they'd ever be. Today, I think people who are skeptical about AI being able to code at a professional level just aren't using the tools right. In the right hands, AI assistants like Cloud Code are way past just being autocomplete and they're now able to do complex multi-step workflows that literally span days. But this is just my experience. So, I dug into the data and at first it looks pretty bleak. Let's start with the job market. The Bureau of Labor Statistics shows that computer programmer roles dropped about 27% in just 2 years and they project another 6% decline through 2034. Those jobs straight up aren't coming back. Not to mention layoffs and the correction of overhiring during COVID. As of mid 2025, tech postings on Indeed were 36% below the prepandemic baseline. All this while AI use is growing. Stock overflow's 2025 developer survey found 84% of developers are using or planning to use AI tools. And brand new data from the Pragmatic Summit, a gathering of 500 top engineers, puts it even higher. 93% of devs are now using AI tools, saving an average of 4 hours a week. AI authored code jumped from 22% in Q3 2025 to 27% in February 2026. That is a massive shift in just one quarter. AI can create entire applications from spec to testing to deployment now. So, if you're watching this thinking, why would I spend years learning something AI can already do? That's a fair reaction. But the data tell a more complicated story than the headlines suggest. Because here's what those scary numbers leave out. Computer programmer roles are dying, but software developer roles are down 0.3%. That's basically flat. And the Bureau of Labor Statistics actually projects 15% growth for software developers through 2034. That's five times faster than the average for all occupations. So what's the difference between those two categories? Programmer rules were historically about translating specs into syntax. They would take requirements and convert them into working code. That's the part AI is good at. And honestly, it was heading toward automation long ago. AI just accelerated it. Developer and engineer roles involve design decisions, reliability, trade-off analysis, crossunctional communication, and incident response. The work that's disappearing was always going to disappear. The work that's staying requires a human brain for now at least, which we'll get to. And here's something else. While overall tech hiring is down, AI related demand is moving in the opposite direction. Axios reported that mentions of AI skills and job postings rose 16% in just 3 months, even as overall tech hiring was down 27%. What we're seeing is more of a market shift than anything else. Now, remember that stat about 84% of developers using AI? There's a follow-up that's really important. Stack Overflow found that 46% of developers actively distrust AI generated code, up from 31% the year before. Only 3% say they highly trust it. Twothirds of developers say AI gives answers that are almost right but not quite, which makes debugging more timeconuming, not less. It's creating code that looks correct, but often isn't. I'm one of the 84% of developers using AI, but I'm also part of the 46% who actively distrust AI generated code. So, let me show you what my job actually looks like now that I don't write code myself anymore. You can think about software work in three phases. Before code, what are we building and why? What are the constraints? Things like latency, cost, and privacy. What could go wrong? Who are the stakeholders and why do they care about this? What are the politics and personalities between teams that determine what gets built? During code, writing the actual functions, modules, and tests. And after code, this is everything from deployment to monitoring to compliance to incident response and communicating everything to stakeholders. All the stuff that's required for production systems and for decision-making. AI compressed the during phase, but it didn't magically delete the before and after. It actually made them more of a focus than they were previously. Now, what a project looks like for me, maybe a couple of weeks of coordinating with stakeholders, gathering requirements, and writing really detailed specs. Then, a day or two of working with an AI coding assistant to actually build the project. Then, potentially several more weeks of testing, evaluating, and making sure I'm confident in what I'm shipping. That first part is really important. You have to have a clear idea of what you're building for the AI to be successful. I honestly think this explains the remaining AI skeptics because most AI coding tools just start generating code the second you give them a prompt, which is kind of bound to output slop from time to time. Instead, you need a structured approach. Luckily, there are tools that help you with this, like the sponsor of today's video, Verdant. When you're starting a new feature or project, Verdant's plan mode actually stops you first and clarifies requirements. So, if I tell it to build a chat interface, it doesn't just start spitting out code. It asks me clarifying questions so we can get aligned from the start what the UI should look like, details on the functionality, and whether I want diagrams. But here's where it gets interesting. With their multilan mode, Verdant doesn't just use one model to generate that plan. It brings in multiple frontier models, Claw, GPT, Gemini, and has them essentially cross-examine each other's ideas. So instead of one model's perspective, you're getting a plan that's been stress tested by three different reasoning approaches before you write a single line of code. Then once you're building, it has this next action feature that proactively suggests what you should do next based on context. Like if you're working on that chat UI, it'll give you suggestions for new features or how to deploy. And when you're ready for code review, it doesn't just look at the diff, it traces what your changes actually were across the entire system and reviews them from multiple angles. The result is I'm spending way less time fighting AI outputs and way more time on the parts that actually matter. The design decisions, the trade-off analysis, and all that other stuff we've been talking about in this whole video. If you want to try that kind of structured AI workflow, the link to Verdant is in the description. With all these tools, you can make incredibly fast progress. AI gets you 80% of the way there in record time. But that last 20%, building the right things and making it production safe, is where the actual hard work has always been. And if you don't understand systems deeply enough to evaluate that last 20%, you're shipping code you can't vouch for. Because here's what doesn't change regardless of how good AI gets. When something breaks in production, when there's a security breach, compliance violation, or an outage that costs the company boatloads of money, someone is accountable. AI doesn't get paged at 3:00 a.m. You do. AI doesn't get called into incident review. You do. AI doesn't explain to leadership why customer data was exposed. you do. So even in the most optimistic AI future, the question isn't will humans be involved? It's what will humans need to know to be involved effectively? And the answer is you need to understand systems, which means you need to understand code. You can't audit AI generated code if you don't know what correct looks like. You can't debug a production incident if you can't read logs and stack traces. You can't make good architectural decisions if you don't understand databases, networking, concurrency, and failure modes. It's not about the typing, it's about the understanding. As Dave Farley from modern software engineering put it, AI code assistance acts as a kind of amplifier. If you're already doing the right things, AI will amplify those things. If you're already doing the wrong things, AI will help you dig a deeper hole faster. Tools amplify capability. They don't replace it. I heard this exact message over and over from hiring managers and engineering leaders at the Pragmatic Summit. Strong teams are getting stronger faster. Dysfunctional teams are getting dysfunctional faster. Some companies have cut customerf facing incidents in half since adopting AI tools. Others have doubled them. Same tools, completely different outcomes. The difference is the humans using them. Now, you might be asking yourself, but what if AI gets way better in the next 2 to 3 years? What if it can do the big picture thinking, too? Let's talk about what better actually means. Frontier models are absolutely still improving, but most of the improvements in performance that we're seeing aren't really coming from bigger base models. They're coming from better tooling. Things like improved context engineering and agent workflows. Understanding how to guide and improve agent systems will remain valuable skills for the foreseeable future. And again, even if AI gets dramatically better at the during code phase, the verification, governance, communication, and accountability still require coding literacy. Or what if you're thinking, I can vibe code apps without deep understanding already. Why would I bother learning? You can build demos and MVPs without really understanding how to code. Sure, but production systems at scale require a ton of things you don't know that you don't know if you've never learned this stuff from the ground up. If you want to ship something that handles real user data and real liability, you need to put the time in. Otherwise, you're kind of stuck in Dunning Krueger land. And lastly, you might be aligned that learning all of this makes sense on the job, but wondering if you can even get a job anyway. Junior hiring is really bad right now, so why even bother? And yes, it's harder than in 2021. No question about that. But it is still possible with the right projects, mindset, and strategy. I have tons of other videos on how to break in as a junior that I'll link below. So, if you're learning to code right now or thinking about it, here's what I'd focus on. We can break this up into three steps. First, foundations. Pick one language and learn it really well. Python or JavaScript are good starting points. Understand fundamentals like data structures, APIs, authentication basics, and how databases work. Write unit tests and integration tests. And practice reading unfamiliar code and explaining what it does. This is the time to use AI only to explain concepts and test your understanding. Don't outsource your learning to AI. Once you've been studying for a while, ask yourself some questions. Can I read code and understand what it's doing? Can I debug a failing test? Can I reason about data flow and failure cases? If yes, move on to step two. This is the work with AI effectively step. Learn to structure prompts with constraints and a clear definition of done. Use AI to generate tests and then audit them critically. Practice small focused PRs instead of massive changes. Write evaluation checks for AI outputs and treat code review as a primary skill. Once you're confident that you can use AI to go faster without sacrificing correctness, you can move on to step three. This is the human layer where you start practicing professional level judgment. Think about trade-offs of things like performance versus cost, consistency versus availability or security and compliance. Write clear technical specs and design docs. Explain technical decisions to non-technical people. Practice with your mom. Develop an incident response mindset. When things break, how do you triage and fix them? Your goal should be to own a product end to end from requirements to production. I know that sounds like a lot, and it is. I'm not going to tell you that this will be easy, and I'm not going to promise that if you learn to code, you'll definitely get a job. The market is harder than it was a few years ago. AI is changing the way we work on a daily basis, and the skills that matter are changing, too. You've probably heard some version of coding is dead recently. Maybe it was Nvidia's CEO saying nobody will need to program anymore, or Anthropic CEO predicting AI would write 90% of code within 6 months. That was literally a year ago, by the way. But like Francois Cholelay, the creator of Keros pointed out, software engineering has been within 6 months of being dead continually since early 2023. And this pattern is way older than AI. Forran was supposed to let scientists write programs without programmers. Cobalt's English-like syntax was supposed to let managers bypass developers entirely. Every major abstraction, compilers, highle languages, object-oriented programming, was pitched at making software engineers obsolete. But in reality, the demand for people who understand systems didn't disappear. It actually grew. So, you're not too late, and don't let the haters get you down. If you want to learn how to code, but don't know where to start, check out my road map for Python. That's up next.",
    "formatted_transcript": [
      {
        "start_time": 0,
        "end_time": 1920,
        "duration": 1920,
        "text": "I'm a senior applied scientist at Amazon"
      },
      {
        "start_time": 1920,
        "end_time": 3200,
        "duration": 1280,
        "text": "where I build production machine"
      },
      {
        "start_time": 3200,
        "end_time": 5279,
        "duration": 2079,
        "text": "learning systems and I don't write code"
      },
      {
        "start_time": 5279,
        "end_time": 8160,
        "duration": 2881,
        "text": "anymore. AI writes virtually every line"
      },
      {
        "start_time": 8160,
        "end_time": 9840,
        "duration": 1680,
        "text": "I commit. So here's the uncomfortable"
      },
      {
        "start_time": 9840,
        "end_time": 12320,
        "duration": 2480,
        "text": "question I keep getting and honestly the"
      },
      {
        "start_time": 12320,
        "end_time": 14000,
        "duration": 1680,
        "text": "question I've been asking myself. If"
      },
      {
        "start_time": 14000,
        "end_time": 15519,
        "duration": 1519,
        "text": "someone like me doesn't actually write"
      },
      {
        "start_time": 15519,
        "end_time": 17680,
        "duration": 2161,
        "text": "code anymore. Is it too late for you to"
      },
      {
        "start_time": 17680,
        "end_time": 19760,
        "duration": 2080,
        "text": "learn? Last year if you'd asked me I"
      },
      {
        "start_time": 19760,
        "end_time": 21600,
        "duration": 1840,
        "text": "would have been totally confident that"
      },
      {
        "start_time": 21600,
        "end_time": 23519,
        "duration": 1919,
        "text": "AI coding tools just aren't there yet?"
      },
      {
        "start_time": 23519,
        "end_time": 25199,
        "duration": 1680,
        "text": "And I was skeptical if they'd ever be."
      },
      {
        "start_time": 25199,
        "end_time": 27119,
        "duration": 1920,
        "text": "Today, I think people who are skeptical"
      },
      {
        "start_time": 27119,
        "end_time": 28720,
        "duration": 1601,
        "text": "about AI being able to code at a"
      },
      {
        "start_time": 28720,
        "end_time": 30320,
        "duration": 1600,
        "text": "professional level just aren't using the"
      },
      {
        "start_time": 30320,
        "end_time": 32480,
        "duration": 2160,
        "text": "tools right. In the right hands, AI"
      },
      {
        "start_time": 32480,
        "end_time": 34880,
        "duration": 2400,
        "text": "assistants like Cloud Code are way past"
      },
      {
        "start_time": 34880,
        "end_time": 36640,
        "duration": 1760,
        "text": "just being autocomplete and they're now"
      },
      {
        "start_time": 36640,
        "end_time": 39280,
        "duration": 2640,
        "text": "able to do complex multi-step workflows"
      },
      {
        "start_time": 39280,
        "end_time": 41280,
        "duration": 2000,
        "text": "that literally span days. But this is"
      },
      {
        "start_time": 41280,
        "end_time": 43520,
        "duration": 2240,
        "text": "just my experience. So, I dug into the"
      },
      {
        "start_time": 43520,
        "end_time": 45920,
        "duration": 2400,
        "text": "data and at first it looks pretty bleak."
      },
      {
        "start_time": 45920,
        "end_time": 47680,
        "duration": 1760,
        "text": "Let's start with the job market. The"
      },
      {
        "start_time": 47680,
        "end_time": 49440,
        "duration": 1760,
        "text": "Bureau of Labor Statistics shows that"
      },
      {
        "start_time": 49440,
        "end_time": 51120,
        "duration": 1680,
        "text": "computer programmer roles dropped about"
      },
      {
        "start_time": 51120,
        "end_time": 53920,
        "duration": 2800,
        "text": "27% in just 2 years and they project"
      },
      {
        "start_time": 53920,
        "end_time": 56559,
        "duration": 2639,
        "text": "another 6% decline through 2034. Those"
      },
      {
        "start_time": 56559,
        "end_time": 58399,
        "duration": 1840,
        "text": "jobs straight up aren't coming back. Not"
      },
      {
        "start_time": 58399,
        "end_time": 60160,
        "duration": 1761,
        "text": "to mention layoffs and the correction of"
      },
      {
        "start_time": 60160,
        "end_time": 63120,
        "duration": 2960,
        "text": "overhiring during COVID. As of mid 2025,"
      },
      {
        "start_time": 63120,
        "end_time": 66000,
        "duration": 2880,
        "text": "tech postings on Indeed were 36% below"
      },
      {
        "start_time": 66000,
        "end_time": 68159,
        "duration": 2159,
        "text": "the prepandemic baseline. All this while"
      },
      {
        "start_time": 68159,
        "end_time": 70960,
        "duration": 2801,
        "text": "AI use is growing. Stock overflow's 2025"
      },
      {
        "start_time": 70960,
        "end_time": 73840,
        "duration": 2880,
        "text": "developer survey found 84% of developers"
      },
      {
        "start_time": 73840,
        "end_time": 76159,
        "duration": 2319,
        "text": "are using or planning to use AI tools."
      },
      {
        "start_time": 76159,
        "end_time": 77840,
        "duration": 1681,
        "text": "And brand new data from the Pragmatic"
      },
      {
        "start_time": 77840,
        "end_time": 80080,
        "duration": 2240,
        "text": "Summit, a gathering of 500 top"
      },
      {
        "start_time": 80080,
        "end_time": 82640,
        "duration": 2560,
        "text": "engineers, puts it even higher. 93% of"
      },
      {
        "start_time": 82640,
        "end_time": 84960,
        "duration": 2320,
        "text": "devs are now using AI tools, saving an"
      },
      {
        "start_time": 84960,
        "end_time": 87040,
        "duration": 2080,
        "text": "average of 4 hours a week. AI authored"
      },
      {
        "start_time": 87040,
        "end_time": 91040,
        "duration": 4000,
        "text": "code jumped from 22% in Q3 2025 to 27%"
      },
      {
        "start_time": 91040,
        "end_time": 93439,
        "duration": 2399,
        "text": "in February 2026. That is a massive"
      },
      {
        "start_time": 93439,
        "end_time": 95759,
        "duration": 2320,
        "text": "shift in just one quarter. AI can create"
      },
      {
        "start_time": 95759,
        "end_time": 97840,
        "duration": 2081,
        "text": "entire applications from spec to testing"
      },
      {
        "start_time": 97840,
        "end_time": 99280,
        "duration": 1440,
        "text": "to deployment now. So, if you're"
      },
      {
        "start_time": 99280,
        "end_time": 100720,
        "duration": 1440,
        "text": "watching this thinking, why would I"
      },
      {
        "start_time": 100720,
        "end_time": 102560,
        "duration": 1840,
        "text": "spend years learning something AI can"
      },
      {
        "start_time": 102560,
        "end_time": 105280,
        "duration": 2720,
        "text": "already do? That's a fair reaction. But"
      },
      {
        "start_time": 105280,
        "end_time": 107360,
        "duration": 2080,
        "text": "the data tell a more complicated story"
      },
      {
        "start_time": 107360,
        "end_time": 109280,
        "duration": 1920,
        "text": "than the headlines suggest. Because"
      },
      {
        "start_time": 109280,
        "end_time": 111040,
        "duration": 1760,
        "text": "here's what those scary numbers leave"
      },
      {
        "start_time": 111040,
        "end_time": 112960,
        "duration": 1920,
        "text": "out. Computer programmer roles are"
      },
      {
        "start_time": 112960,
        "end_time": 115119,
        "duration": 2159,
        "text": "dying, but software developer roles are"
      },
      {
        "start_time": 115119,
        "end_time": 118079,
        "duration": 2960,
        "text": "down 0.3%. That's basically flat. And"
      },
      {
        "start_time": 118079,
        "end_time": 119840,
        "duration": 1761,
        "text": "the Bureau of Labor Statistics actually"
      },
      {
        "start_time": 119840,
        "end_time": 121920,
        "duration": 2080,
        "text": "projects 15% growth for software"
      },
      {
        "start_time": 121920,
        "end_time": 124240,
        "duration": 2320,
        "text": "developers through 2034. That's five"
      },
      {
        "start_time": 124240,
        "end_time": 126000,
        "duration": 1760,
        "text": "times faster than the average for all"
      },
      {
        "start_time": 126000,
        "end_time": 128000,
        "duration": 2000,
        "text": "occupations. So what's the difference"
      },
      {
        "start_time": 128000,
        "end_time": 130239,
        "duration": 2239,
        "text": "between those two categories? Programmer"
      },
      {
        "start_time": 130239,
        "end_time": 131680,
        "duration": 1441,
        "text": "rules were historically about"
      },
      {
        "start_time": 131680,
        "end_time": 133760,
        "duration": 2080,
        "text": "translating specs into syntax. They"
      },
      {
        "start_time": 133760,
        "end_time": 135599,
        "duration": 1839,
        "text": "would take requirements and convert them"
      },
      {
        "start_time": 135599,
        "end_time": 137840,
        "duration": 2241,
        "text": "into working code. That's the part AI is"
      },
      {
        "start_time": 137840,
        "end_time": 139520,
        "duration": 1680,
        "text": "good at. And honestly, it was heading"
      },
      {
        "start_time": 139520,
        "end_time": 141680,
        "duration": 2160,
        "text": "toward automation long ago. AI just"
      },
      {
        "start_time": 141680,
        "end_time": 144000,
        "duration": 2320,
        "text": "accelerated it. Developer and engineer"
      },
      {
        "start_time": 144000,
        "end_time": 145920,
        "duration": 1920,
        "text": "roles involve design decisions,"
      },
      {
        "start_time": 145920,
        "end_time": 148239,
        "duration": 2319,
        "text": "reliability, trade-off analysis,"
      },
      {
        "start_time": 148239,
        "end_time": 149920,
        "duration": 1681,
        "text": "crossunctional communication, and"
      },
      {
        "start_time": 149920,
        "end_time": 151680,
        "duration": 1760,
        "text": "incident response. The work that's"
      },
      {
        "start_time": 151680,
        "end_time": 153120,
        "duration": 1440,
        "text": "disappearing was always going to"
      },
      {
        "start_time": 153120,
        "end_time": 155120,
        "duration": 2000,
        "text": "disappear. The work that's staying"
      },
      {
        "start_time": 155120,
        "end_time": 157360,
        "duration": 2240,
        "text": "requires a human brain for now at least,"
      },
      {
        "start_time": 157360,
        "end_time": 158959,
        "duration": 1599,
        "text": "which we'll get to. And here's something"
      },
      {
        "start_time": 158959,
        "end_time": 161680,
        "duration": 2721,
        "text": "else. While overall tech hiring is down,"
      },
      {
        "start_time": 161680,
        "end_time": 163680,
        "duration": 2000,
        "text": "AI related demand is moving in the"
      },
      {
        "start_time": 163680,
        "end_time": 165760,
        "duration": 2080,
        "text": "opposite direction. Axios reported that"
      },
      {
        "start_time": 165760,
        "end_time": 167840,
        "duration": 2080,
        "text": "mentions of AI skills and job postings"
      },
      {
        "start_time": 167840,
        "end_time": 170640,
        "duration": 2800,
        "text": "rose 16% in just 3 months, even as"
      },
      {
        "start_time": 170640,
        "end_time": 173280,
        "duration": 2640,
        "text": "overall tech hiring was down 27%. What"
      },
      {
        "start_time": 173280,
        "end_time": 174959,
        "duration": 1679,
        "text": "we're seeing is more of a market shift"
      },
      {
        "start_time": 174959,
        "end_time": 176640,
        "duration": 1681,
        "text": "than anything else. Now, remember that"
      },
      {
        "start_time": 176640,
        "end_time": 179519,
        "duration": 2879,
        "text": "stat about 84% of developers using AI?"
      },
      {
        "start_time": 179519,
        "end_time": 180959,
        "duration": 1440,
        "text": "There's a follow-up that's really"
      },
      {
        "start_time": 180959,
        "end_time": 183599,
        "duration": 2640,
        "text": "important. Stack Overflow found that 46%"
      },
      {
        "start_time": 183599,
        "end_time": 185920,
        "duration": 2321,
        "text": "of developers actively distrust AI"
      },
      {
        "start_time": 185920,
        "end_time": 188319,
        "duration": 2399,
        "text": "generated code, up from 31% the year"
      },
      {
        "start_time": 188319,
        "end_time": 190720,
        "duration": 2401,
        "text": "before. Only 3% say they highly trust"
      },
      {
        "start_time": 190720,
        "end_time": 193120,
        "duration": 2400,
        "text": "it. Twothirds of developers say AI gives"
      },
      {
        "start_time": 193120,
        "end_time": 195120,
        "duration": 2000,
        "text": "answers that are almost right but not"
      },
      {
        "start_time": 195120,
        "end_time": 197120,
        "duration": 2000,
        "text": "quite, which makes debugging more"
      },
      {
        "start_time": 197120,
        "end_time": 199440,
        "duration": 2320,
        "text": "timeconuming, not less. It's creating"
      },
      {
        "start_time": 199440,
        "end_time": 201280,
        "duration": 1840,
        "text": "code that looks correct, but often"
      },
      {
        "start_time": 201280,
        "end_time": 203840,
        "duration": 2560,
        "text": "isn't. I'm one of the 84% of developers"
      },
      {
        "start_time": 203840,
        "end_time": 206480,
        "duration": 2640,
        "text": "using AI, but I'm also part of the 46%"
      },
      {
        "start_time": 206480,
        "end_time": 208800,
        "duration": 2320,
        "text": "who actively distrust AI generated code."
      },
      {
        "start_time": 208800,
        "end_time": 210560,
        "duration": 1760,
        "text": "So, let me show you what my job actually"
      },
      {
        "start_time": 210560,
        "end_time": 212159,
        "duration": 1599,
        "text": "looks like now that I don't write code"
      },
      {
        "start_time": 212159,
        "end_time": 213760,
        "duration": 1601,
        "text": "myself anymore. You can think about"
      },
      {
        "start_time": 213760,
        "end_time": 216000,
        "duration": 2240,
        "text": "software work in three phases. Before"
      },
      {
        "start_time": 216000,
        "end_time": 218159,
        "duration": 2159,
        "text": "code, what are we building and why? What"
      },
      {
        "start_time": 218159,
        "end_time": 219680,
        "duration": 1521,
        "text": "are the constraints? Things like"
      },
      {
        "start_time": 219680,
        "end_time": 221920,
        "duration": 2240,
        "text": "latency, cost, and privacy. What could"
      },
      {
        "start_time": 221920,
        "end_time": 223840,
        "duration": 1920,
        "text": "go wrong? Who are the stakeholders and"
      },
      {
        "start_time": 223840,
        "end_time": 225519,
        "duration": 1679,
        "text": "why do they care about this? What are"
      },
      {
        "start_time": 225519,
        "end_time": 227519,
        "duration": 2000,
        "text": "the politics and personalities between"
      },
      {
        "start_time": 227519,
        "end_time": 229440,
        "duration": 1921,
        "text": "teams that determine what gets built?"
      },
      {
        "start_time": 229440,
        "end_time": 231440,
        "duration": 2000,
        "text": "During code, writing the actual"
      },
      {
        "start_time": 231440,
        "end_time": 234000,
        "duration": 2560,
        "text": "functions, modules, and tests. And after"
      },
      {
        "start_time": 234000,
        "end_time": 236480,
        "duration": 2480,
        "text": "code, this is everything from deployment"
      },
      {
        "start_time": 236480,
        "end_time": 238879,
        "duration": 2399,
        "text": "to monitoring to compliance to incident"
      },
      {
        "start_time": 238879,
        "end_time": 241120,
        "duration": 2241,
        "text": "response and communicating everything to"
      },
      {
        "start_time": 241120,
        "end_time": 243040,
        "duration": 1920,
        "text": "stakeholders. All the stuff that's"
      },
      {
        "start_time": 243040,
        "end_time": 244879,
        "duration": 1839,
        "text": "required for production systems and for"
      },
      {
        "start_time": 244879,
        "end_time": 247040,
        "duration": 2161,
        "text": "decision-making. AI compressed the"
      },
      {
        "start_time": 247040,
        "end_time": 249280,
        "duration": 2240,
        "text": "during phase, but it didn't magically"
      },
      {
        "start_time": 249280,
        "end_time": 251280,
        "duration": 2000,
        "text": "delete the before and after. It actually"
      },
      {
        "start_time": 251280,
        "end_time": 253120,
        "duration": 1840,
        "text": "made them more of a focus than they were"
      },
      {
        "start_time": 253120,
        "end_time": 255120,
        "duration": 2000,
        "text": "previously. Now, what a project looks"
      },
      {
        "start_time": 255120,
        "end_time": 257199,
        "duration": 2079,
        "text": "like for me, maybe a couple of weeks of"
      },
      {
        "start_time": 257199,
        "end_time": 258880,
        "duration": 1681,
        "text": "coordinating with stakeholders,"
      },
      {
        "start_time": 258880,
        "end_time": 261120,
        "duration": 2240,
        "text": "gathering requirements, and writing"
      },
      {
        "start_time": 261120,
        "end_time": 263680,
        "duration": 2560,
        "text": "really detailed specs. Then, a day or"
      },
      {
        "start_time": 263680,
        "end_time": 265360,
        "duration": 1680,
        "text": "two of working with an AI coding"
      },
      {
        "start_time": 265360,
        "end_time": 267280,
        "duration": 1920,
        "text": "assistant to actually build the project."
      },
      {
        "start_time": 267280,
        "end_time": 269199,
        "duration": 1919,
        "text": "Then, potentially several more weeks of"
      },
      {
        "start_time": 269199,
        "end_time": 271600,
        "duration": 2401,
        "text": "testing, evaluating, and making sure I'm"
      },
      {
        "start_time": 271600,
        "end_time": 273199,
        "duration": 1599,
        "text": "confident in what I'm shipping. That"
      },
      {
        "start_time": 273199,
        "end_time": 275280,
        "duration": 2081,
        "text": "first part is really important. You have"
      },
      {
        "start_time": 275280,
        "end_time": 276960,
        "duration": 1680,
        "text": "to have a clear idea of what you're"
      },
      {
        "start_time": 276960,
        "end_time": 278960,
        "duration": 2000,
        "text": "building for the AI to be successful. I"
      },
      {
        "start_time": 278960,
        "end_time": 280400,
        "duration": 1440,
        "text": "honestly think this explains the"
      },
      {
        "start_time": 280400,
        "end_time": 283120,
        "duration": 2720,
        "text": "remaining AI skeptics because most AI"
      },
      {
        "start_time": 283120,
        "end_time": 285040,
        "duration": 1920,
        "text": "coding tools just start generating code"
      },
      {
        "start_time": 285040,
        "end_time": 286880,
        "duration": 1840,
        "text": "the second you give them a prompt, which"
      },
      {
        "start_time": 286880,
        "end_time": 288720,
        "duration": 1840,
        "text": "is kind of bound to output slop from"
      },
      {
        "start_time": 288720,
        "end_time": 290560,
        "duration": 1840,
        "text": "time to time. Instead, you need a"
      },
      {
        "start_time": 290560,
        "end_time": 292560,
        "duration": 2000,
        "text": "structured approach. Luckily, there are"
      },
      {
        "start_time": 292560,
        "end_time": 294160,
        "duration": 1600,
        "text": "tools that help you with this, like the"
      },
      {
        "start_time": 294160,
        "end_time": 296320,
        "duration": 2160,
        "text": "sponsor of today's video, Verdant. When"
      },
      {
        "start_time": 296320,
        "end_time": 297600,
        "duration": 1280,
        "text": "you're starting a new feature or"
      },
      {
        "start_time": 297600,
        "end_time": 299840,
        "duration": 2240,
        "text": "project, Verdant's plan mode actually"
      },
      {
        "start_time": 299840,
        "end_time": 301360,
        "duration": 1520,
        "text": "stops you first and clarifies"
      },
      {
        "start_time": 301360,
        "end_time": 303199,
        "duration": 1839,
        "text": "requirements. So, if I tell it to build"
      },
      {
        "start_time": 303199,
        "end_time": 305040,
        "duration": 1841,
        "text": "a chat interface, it doesn't just start"
      },
      {
        "start_time": 305040,
        "end_time": 307440,
        "duration": 2400,
        "text": "spitting out code. It asks me clarifying"
      },
      {
        "start_time": 307440,
        "end_time": 309039,
        "duration": 1599,
        "text": "questions so we can get aligned from the"
      },
      {
        "start_time": 309039,
        "end_time": 311039,
        "duration": 2000,
        "text": "start what the UI should look like,"
      },
      {
        "start_time": 311039,
        "end_time": 312639,
        "duration": 1600,
        "text": "details on the functionality, and"
      },
      {
        "start_time": 312639,
        "end_time": 314479,
        "duration": 1840,
        "text": "whether I want diagrams. But here's"
      },
      {
        "start_time": 314479,
        "end_time": 316160,
        "duration": 1681,
        "text": "where it gets interesting. With their"
      },
      {
        "start_time": 316160,
        "end_time": 318720,
        "duration": 2560,
        "text": "multilan mode, Verdant doesn't just use"
      },
      {
        "start_time": 318720,
        "end_time": 320800,
        "duration": 2080,
        "text": "one model to generate that plan. It"
      },
      {
        "start_time": 320800,
        "end_time": 322639,
        "duration": 1839,
        "text": "brings in multiple frontier models,"
      },
      {
        "start_time": 322639,
        "end_time": 324960,
        "duration": 2321,
        "text": "Claw, GPT, Gemini, and has them"
      },
      {
        "start_time": 324960,
        "end_time": 326560,
        "duration": 1600,
        "text": "essentially cross-examine each other's"
      },
      {
        "start_time": 326560,
        "end_time": 328560,
        "duration": 2000,
        "text": "ideas. So instead of one model's"
      },
      {
        "start_time": 328560,
        "end_time": 329919,
        "duration": 1359,
        "text": "perspective, you're getting a plan"
      },
      {
        "start_time": 329919,
        "end_time": 331520,
        "duration": 1601,
        "text": "that's been stress tested by three"
      },
      {
        "start_time": 331520,
        "end_time": 332880,
        "duration": 1360,
        "text": "different reasoning approaches before"
      },
      {
        "start_time": 332880,
        "end_time": 334720,
        "duration": 1840,
        "text": "you write a single line of code. Then"
      },
      {
        "start_time": 334720,
        "end_time": 336479,
        "duration": 1759,
        "text": "once you're building, it has this next"
      },
      {
        "start_time": 336479,
        "end_time": 338720,
        "duration": 2241,
        "text": "action feature that proactively suggests"
      },
      {
        "start_time": 338720,
        "end_time": 340240,
        "duration": 1520,
        "text": "what you should do next based on"
      },
      {
        "start_time": 340240,
        "end_time": 341759,
        "duration": 1519,
        "text": "context. Like if you're working on that"
      },
      {
        "start_time": 341759,
        "end_time": 343680,
        "duration": 1921,
        "text": "chat UI, it'll give you suggestions for"
      },
      {
        "start_time": 343680,
        "end_time": 345360,
        "duration": 1680,
        "text": "new features or how to deploy. And when"
      },
      {
        "start_time": 345360,
        "end_time": 346800,
        "duration": 1440,
        "text": "you're ready for code review, it doesn't"
      },
      {
        "start_time": 346800,
        "end_time": 348639,
        "duration": 1839,
        "text": "just look at the diff, it traces what"
      },
      {
        "start_time": 348639,
        "end_time": 350400,
        "duration": 1761,
        "text": "your changes actually were across the"
      },
      {
        "start_time": 350400,
        "end_time": 352160,
        "duration": 1760,
        "text": "entire system and reviews them from"
      },
      {
        "start_time": 352160,
        "end_time": 354240,
        "duration": 2080,
        "text": "multiple angles. The result is I'm"
      },
      {
        "start_time": 354240,
        "end_time": 356240,
        "duration": 2000,
        "text": "spending way less time fighting AI"
      },
      {
        "start_time": 356240,
        "end_time": 358160,
        "duration": 1920,
        "text": "outputs and way more time on the parts"
      },
      {
        "start_time": 358160,
        "end_time": 359680,
        "duration": 1520,
        "text": "that actually matter. The design"
      },
      {
        "start_time": 359680,
        "end_time": 361520,
        "duration": 1840,
        "text": "decisions, the trade-off analysis, and"
      },
      {
        "start_time": 361520,
        "end_time": 363039,
        "duration": 1519,
        "text": "all that other stuff we've been talking"
      },
      {
        "start_time": 363039,
        "end_time": 364400,
        "duration": 1361,
        "text": "about in this whole video. If you want"
      },
      {
        "start_time": 364400,
        "end_time": 366000,
        "duration": 1600,
        "text": "to try that kind of structured AI"
      },
      {
        "start_time": 366000,
        "end_time": 367759,
        "duration": 1759,
        "text": "workflow, the link to Verdant is in the"
      },
      {
        "start_time": 367759,
        "end_time": 369600,
        "duration": 1841,
        "text": "description. With all these tools, you"
      },
      {
        "start_time": 369600,
        "end_time": 372240,
        "duration": 2640,
        "text": "can make incredibly fast progress. AI"
      },
      {
        "start_time": 372240,
        "end_time": 374639,
        "duration": 2399,
        "text": "gets you 80% of the way there in record"
      },
      {
        "start_time": 374639,
        "end_time": 377280,
        "duration": 2641,
        "text": "time. But that last 20%, building the"
      },
      {
        "start_time": 377280,
        "end_time": 378880,
        "duration": 1600,
        "text": "right things and making it production"
      },
      {
        "start_time": 378880,
        "end_time": 381120,
        "duration": 2240,
        "text": "safe, is where the actual hard work has"
      },
      {
        "start_time": 381120,
        "end_time": 382880,
        "duration": 1760,
        "text": "always been. And if you don't understand"
      },
      {
        "start_time": 382880,
        "end_time": 384720,
        "duration": 1840,
        "text": "systems deeply enough to evaluate that"
      },
      {
        "start_time": 384720,
        "end_time": 386880,
        "duration": 2160,
        "text": "last 20%, you're shipping code you can't"
      },
      {
        "start_time": 386880,
        "end_time": 388880,
        "duration": 2000,
        "text": "vouch for. Because here's what doesn't"
      },
      {
        "start_time": 388880,
        "end_time": 391199,
        "duration": 2319,
        "text": "change regardless of how good AI gets."
      },
      {
        "start_time": 391199,
        "end_time": 392880,
        "duration": 1681,
        "text": "When something breaks in production,"
      },
      {
        "start_time": 392880,
        "end_time": 394479,
        "duration": 1599,
        "text": "when there's a security breach,"
      },
      {
        "start_time": 394479,
        "end_time": 397120,
        "duration": 2641,
        "text": "compliance violation, or an outage that"
      },
      {
        "start_time": 397120,
        "end_time": 399280,
        "duration": 2160,
        "text": "costs the company boatloads of money,"
      },
      {
        "start_time": 399280,
        "end_time": 401360,
        "duration": 2080,
        "text": "someone is accountable. AI doesn't get"
      },
      {
        "start_time": 401360,
        "end_time": 404240,
        "duration": 2880,
        "text": "paged at 3:00 a.m. You do. AI doesn't"
      },
      {
        "start_time": 404240,
        "end_time": 406800,
        "duration": 2560,
        "text": "get called into incident review. You do."
      },
      {
        "start_time": 406800,
        "end_time": 409039,
        "duration": 2239,
        "text": "AI doesn't explain to leadership why"
      },
      {
        "start_time": 409039,
        "end_time": 412000,
        "duration": 2961,
        "text": "customer data was exposed. you do. So"
      },
      {
        "start_time": 412000,
        "end_time": 414639,
        "duration": 2639,
        "text": "even in the most optimistic AI future,"
      },
      {
        "start_time": 414639,
        "end_time": 416800,
        "duration": 2161,
        "text": "the question isn't will humans be"
      },
      {
        "start_time": 416800,
        "end_time": 419039,
        "duration": 2239,
        "text": "involved? It's what will humans need to"
      },
      {
        "start_time": 419039,
        "end_time": 421120,
        "duration": 2081,
        "text": "know to be involved effectively? And the"
      },
      {
        "start_time": 421120,
        "end_time": 422720,
        "duration": 1600,
        "text": "answer is you need to understand"
      },
      {
        "start_time": 422720,
        "end_time": 424639,
        "duration": 1919,
        "text": "systems, which means you need to"
      },
      {
        "start_time": 424639,
        "end_time": 426960,
        "duration": 2321,
        "text": "understand code. You can't audit AI"
      },
      {
        "start_time": 426960,
        "end_time": 428479,
        "duration": 1519,
        "text": "generated code if you don't know what"
      },
      {
        "start_time": 428479,
        "end_time": 430720,
        "duration": 2241,
        "text": "correct looks like. You can't debug a"
      },
      {
        "start_time": 430720,
        "end_time": 432400,
        "duration": 1680,
        "text": "production incident if you can't read"
      },
      {
        "start_time": 432400,
        "end_time": 434639,
        "duration": 2239,
        "text": "logs and stack traces. You can't make"
      },
      {
        "start_time": 434639,
        "end_time": 436319,
        "duration": 1680,
        "text": "good architectural decisions if you"
      },
      {
        "start_time": 436319,
        "end_time": 438560,
        "duration": 2241,
        "text": "don't understand databases, networking,"
      },
      {
        "start_time": 438560,
        "end_time": 440720,
        "duration": 2160,
        "text": "concurrency, and failure modes. It's not"
      },
      {
        "start_time": 440720,
        "end_time": 442479,
        "duration": 1759,
        "text": "about the typing, it's about the"
      },
      {
        "start_time": 442479,
        "end_time": 444400,
        "duration": 1921,
        "text": "understanding. As Dave Farley from"
      },
      {
        "start_time": 444400,
        "end_time": 446560,
        "duration": 2160,
        "text": "modern software engineering put it, AI"
      },
      {
        "start_time": 446560,
        "end_time": 448319,
        "duration": 1759,
        "text": "code assistance acts as a kind of"
      },
      {
        "start_time": 448319,
        "end_time": 450400,
        "duration": 2081,
        "text": "amplifier. If you're already doing the"
      },
      {
        "start_time": 450400,
        "end_time": 452319,
        "duration": 1919,
        "text": "right things, AI will amplify those"
      },
      {
        "start_time": 452319,
        "end_time": 453919,
        "duration": 1600,
        "text": "things. If you're already doing the"
      },
      {
        "start_time": 453919,
        "end_time": 455919,
        "duration": 2000,
        "text": "wrong things, AI will help you dig a"
      },
      {
        "start_time": 455919,
        "end_time": 458240,
        "duration": 2321,
        "text": "deeper hole faster. Tools amplify"
      },
      {
        "start_time": 458240,
        "end_time": 460160,
        "duration": 1920,
        "text": "capability. They don't replace it. I"
      },
      {
        "start_time": 460160,
        "end_time": 462479,
        "duration": 2319,
        "text": "heard this exact message over and over"
      },
      {
        "start_time": 462479,
        "end_time": 464400,
        "duration": 1921,
        "text": "from hiring managers and engineering"
      },
      {
        "start_time": 464400,
        "end_time": 466479,
        "duration": 2079,
        "text": "leaders at the Pragmatic Summit. Strong"
      },
      {
        "start_time": 466479,
        "end_time": 468639,
        "duration": 2160,
        "text": "teams are getting stronger faster."
      },
      {
        "start_time": 468639,
        "end_time": 470080,
        "duration": 1441,
        "text": "Dysfunctional teams are getting"
      },
      {
        "start_time": 470080,
        "end_time": 472240,
        "duration": 2160,
        "text": "dysfunctional faster. Some companies"
      },
      {
        "start_time": 472240,
        "end_time": 474240,
        "duration": 2000,
        "text": "have cut customerf facing incidents in"
      },
      {
        "start_time": 474240,
        "end_time": 476400,
        "duration": 2160,
        "text": "half since adopting AI tools. Others"
      },
      {
        "start_time": 476400,
        "end_time": 478400,
        "duration": 2000,
        "text": "have doubled them. Same tools,"
      },
      {
        "start_time": 478400,
        "end_time": 480240,
        "duration": 1840,
        "text": "completely different outcomes. The"
      },
      {
        "start_time": 480240,
        "end_time": 482080,
        "duration": 1840,
        "text": "difference is the humans using them."
      },
      {
        "start_time": 482080,
        "end_time": 483599,
        "duration": 1519,
        "text": "Now, you might be asking yourself, but"
      },
      {
        "start_time": 483599,
        "end_time": 485840,
        "duration": 2241,
        "text": "what if AI gets way better in the next 2"
      },
      {
        "start_time": 485840,
        "end_time": 488080,
        "duration": 2240,
        "text": "to 3 years? What if it can do the big"
      },
      {
        "start_time": 488080,
        "end_time": 489919,
        "duration": 1839,
        "text": "picture thinking, too? Let's talk about"
      },
      {
        "start_time": 489919,
        "end_time": 492160,
        "duration": 2241,
        "text": "what better actually means. Frontier"
      },
      {
        "start_time": 492160,
        "end_time": 494400,
        "duration": 2240,
        "text": "models are absolutely still improving,"
      },
      {
        "start_time": 494400,
        "end_time": 496000,
        "duration": 1600,
        "text": "but most of the improvements in"
      },
      {
        "start_time": 496000,
        "end_time": 497680,
        "duration": 1680,
        "text": "performance that we're seeing aren't"
      },
      {
        "start_time": 497680,
        "end_time": 499919,
        "duration": 2239,
        "text": "really coming from bigger base models."
      },
      {
        "start_time": 499919,
        "end_time": 501360,
        "duration": 1441,
        "text": "They're coming from better tooling."
      },
      {
        "start_time": 501360,
        "end_time": 503280,
        "duration": 1920,
        "text": "Things like improved context engineering"
      },
      {
        "start_time": 503280,
        "end_time": 505360,
        "duration": 2080,
        "text": "and agent workflows. Understanding how"
      },
      {
        "start_time": 505360,
        "end_time": 507599,
        "duration": 2239,
        "text": "to guide and improve agent systems will"
      },
      {
        "start_time": 507599,
        "end_time": 508960,
        "duration": 1361,
        "text": "remain valuable skills for the"
      },
      {
        "start_time": 508960,
        "end_time": 511280,
        "duration": 2320,
        "text": "foreseeable future. And again, even if"
      },
      {
        "start_time": 511280,
        "end_time": 513200,
        "duration": 1920,
        "text": "AI gets dramatically better at the"
      },
      {
        "start_time": 513200,
        "end_time": 515599,
        "duration": 2399,
        "text": "during code phase, the verification,"
      },
      {
        "start_time": 515599,
        "end_time": 517039,
        "duration": 1440,
        "text": "governance, communication, and"
      },
      {
        "start_time": 517039,
        "end_time": 518800,
        "duration": 1761,
        "text": "accountability still require coding"
      },
      {
        "start_time": 518800,
        "end_time": 520719,
        "duration": 1919,
        "text": "literacy. Or what if you're thinking, I"
      },
      {
        "start_time": 520719,
        "end_time": 522560,
        "duration": 1841,
        "text": "can vibe code apps without deep"
      },
      {
        "start_time": 522560,
        "end_time": 524480,
        "duration": 1920,
        "text": "understanding already. Why would I"
      },
      {
        "start_time": 524480,
        "end_time": 526560,
        "duration": 2080,
        "text": "bother learning? You can build demos and"
      },
      {
        "start_time": 526560,
        "end_time": 528399,
        "duration": 1839,
        "text": "MVPs without really understanding how to"
      },
      {
        "start_time": 528399,
        "end_time": 530800,
        "duration": 2401,
        "text": "code. Sure, but production systems at"
      },
      {
        "start_time": 530800,
        "end_time": 533200,
        "duration": 2400,
        "text": "scale require a ton of things you don't"
      },
      {
        "start_time": 533200,
        "end_time": 534880,
        "duration": 1680,
        "text": "know that you don't know if you've never"
      },
      {
        "start_time": 534880,
        "end_time": 536560,
        "duration": 1680,
        "text": "learned this stuff from the ground up."
      },
      {
        "start_time": 536560,
        "end_time": 537760,
        "duration": 1200,
        "text": "If you want to ship something that"
      },
      {
        "start_time": 537760,
        "end_time": 539519,
        "duration": 1759,
        "text": "handles real user data and real"
      },
      {
        "start_time": 539519,
        "end_time": 541839,
        "duration": 2320,
        "text": "liability, you need to put the time in."
      },
      {
        "start_time": 541839,
        "end_time": 543519,
        "duration": 1680,
        "text": "Otherwise, you're kind of stuck in"
      },
      {
        "start_time": 543519,
        "end_time": 545600,
        "duration": 2081,
        "text": "Dunning Krueger land. And lastly, you"
      },
      {
        "start_time": 545600,
        "end_time": 547120,
        "duration": 1520,
        "text": "might be aligned that learning all of"
      },
      {
        "start_time": 547120,
        "end_time": 548880,
        "duration": 1760,
        "text": "this makes sense on the job, but"
      },
      {
        "start_time": 548880,
        "end_time": 550720,
        "duration": 1840,
        "text": "wondering if you can even get a job"
      },
      {
        "start_time": 550720,
        "end_time": 552800,
        "duration": 2080,
        "text": "anyway. Junior hiring is really bad"
      },
      {
        "start_time": 552800,
        "end_time": 555440,
        "duration": 2640,
        "text": "right now, so why even bother? And yes,"
      },
      {
        "start_time": 555440,
        "end_time": 557680,
        "duration": 2240,
        "text": "it's harder than in 2021. No question"
      },
      {
        "start_time": 557680,
        "end_time": 559680,
        "duration": 2000,
        "text": "about that. But it is still possible"
      },
      {
        "start_time": 559680,
        "end_time": 561440,
        "duration": 1760,
        "text": "with the right projects, mindset, and"
      },
      {
        "start_time": 561440,
        "end_time": 563839,
        "duration": 2399,
        "text": "strategy. I have tons of other videos on"
      },
      {
        "start_time": 563839,
        "end_time": 565279,
        "duration": 1440,
        "text": "how to break in as a junior that I'll"
      },
      {
        "start_time": 565279,
        "end_time": 566560,
        "duration": 1281,
        "text": "link below. So, if you're learning to"
      },
      {
        "start_time": 566560,
        "end_time": 568399,
        "duration": 1839,
        "text": "code right now or thinking about it,"
      },
      {
        "start_time": 568399,
        "end_time": 570080,
        "duration": 1681,
        "text": "here's what I'd focus on. We can break"
      },
      {
        "start_time": 570080,
        "end_time": 571760,
        "duration": 1680,
        "text": "this up into three steps. First,"
      },
      {
        "start_time": 571760,
        "end_time": 573920,
        "duration": 2160,
        "text": "foundations. Pick one language and learn"
      },
      {
        "start_time": 573920,
        "end_time": 576320,
        "duration": 2400,
        "text": "it really well. Python or JavaScript are"
      },
      {
        "start_time": 576320,
        "end_time": 577680,
        "duration": 1360,
        "text": "good starting points. Understand"
      },
      {
        "start_time": 577680,
        "end_time": 579839,
        "duration": 2159,
        "text": "fundamentals like data structures, APIs,"
      },
      {
        "start_time": 579839,
        "end_time": 581920,
        "duration": 2081,
        "text": "authentication basics, and how databases"
      },
      {
        "start_time": 581920,
        "end_time": 583920,
        "duration": 2000,
        "text": "work. Write unit tests and integration"
      },
      {
        "start_time": 583920,
        "end_time": 586080,
        "duration": 2160,
        "text": "tests. And practice reading unfamiliar"
      },
      {
        "start_time": 586080,
        "end_time": 587920,
        "duration": 1840,
        "text": "code and explaining what it does. This"
      },
      {
        "start_time": 587920,
        "end_time": 590240,
        "duration": 2320,
        "text": "is the time to use AI only to explain"
      },
      {
        "start_time": 590240,
        "end_time": 592240,
        "duration": 2000,
        "text": "concepts and test your understanding."
      },
      {
        "start_time": 592240,
        "end_time": 594080,
        "duration": 1840,
        "text": "Don't outsource your learning to AI."
      },
      {
        "start_time": 594080,
        "end_time": 595839,
        "duration": 1759,
        "text": "Once you've been studying for a while,"
      },
      {
        "start_time": 595839,
        "end_time": 598000,
        "duration": 2161,
        "text": "ask yourself some questions. Can I read"
      },
      {
        "start_time": 598000,
        "end_time": 600000,
        "duration": 2000,
        "text": "code and understand what it's doing? Can"
      },
      {
        "start_time": 600000,
        "end_time": 602000,
        "duration": 2000,
        "text": "I debug a failing test? Can I reason"
      },
      {
        "start_time": 602000,
        "end_time": 604240,
        "duration": 2240,
        "text": "about data flow and failure cases? If"
      },
      {
        "start_time": 604240,
        "end_time": 606480,
        "duration": 2240,
        "text": "yes, move on to step two. This is the"
      },
      {
        "start_time": 606480,
        "end_time": 608959,
        "duration": 2479,
        "text": "work with AI effectively step. Learn to"
      },
      {
        "start_time": 608959,
        "end_time": 610800,
        "duration": 1841,
        "text": "structure prompts with constraints and a"
      },
      {
        "start_time": 610800,
        "end_time": 612800,
        "duration": 2000,
        "text": "clear definition of done. Use AI to"
      },
      {
        "start_time": 612800,
        "end_time": 614399,
        "duration": 1599,
        "text": "generate tests and then audit them"
      },
      {
        "start_time": 614399,
        "end_time": 616800,
        "duration": 2401,
        "text": "critically. Practice small focused PRs"
      },
      {
        "start_time": 616800,
        "end_time": 618640,
        "duration": 1840,
        "text": "instead of massive changes. Write"
      },
      {
        "start_time": 618640,
        "end_time": 621279,
        "duration": 2639,
        "text": "evaluation checks for AI outputs and"
      },
      {
        "start_time": 621279,
        "end_time": 623360,
        "duration": 2081,
        "text": "treat code review as a primary skill."
      },
      {
        "start_time": 623360,
        "end_time": 624880,
        "duration": 1520,
        "text": "Once you're confident that you can use"
      },
      {
        "start_time": 624880,
        "end_time": 626720,
        "duration": 1840,
        "text": "AI to go faster without sacrificing"
      },
      {
        "start_time": 626720,
        "end_time": 628320,
        "duration": 1600,
        "text": "correctness, you can move on to step"
      },
      {
        "start_time": 628320,
        "end_time": 630240,
        "duration": 1920,
        "text": "three. This is the human layer where you"
      },
      {
        "start_time": 630240,
        "end_time": 631839,
        "duration": 1599,
        "text": "start practicing professional level"
      },
      {
        "start_time": 631839,
        "end_time": 633600,
        "duration": 1761,
        "text": "judgment. Think about trade-offs of"
      },
      {
        "start_time": 633600,
        "end_time": 635519,
        "duration": 1919,
        "text": "things like performance versus cost,"
      },
      {
        "start_time": 635519,
        "end_time": 637519,
        "duration": 2000,
        "text": "consistency versus availability or"
      },
      {
        "start_time": 637519,
        "end_time": 639680,
        "duration": 2161,
        "text": "security and compliance. Write clear"
      },
      {
        "start_time": 639680,
        "end_time": 642079,
        "duration": 2399,
        "text": "technical specs and design docs. Explain"
      },
      {
        "start_time": 642079,
        "end_time": 643839,
        "duration": 1760,
        "text": "technical decisions to non-technical"
      },
      {
        "start_time": 643839,
        "end_time": 645760,
        "duration": 1921,
        "text": "people. Practice with your mom. Develop"
      },
      {
        "start_time": 645760,
        "end_time": 647839,
        "duration": 2079,
        "text": "an incident response mindset. When"
      },
      {
        "start_time": 647839,
        "end_time": 649680,
        "duration": 1841,
        "text": "things break, how do you triage and fix"
      },
      {
        "start_time": 649680,
        "end_time": 651680,
        "duration": 2000,
        "text": "them? Your goal should be to own a"
      },
      {
        "start_time": 651680,
        "end_time": 653839,
        "duration": 2159,
        "text": "product end to end from requirements to"
      },
      {
        "start_time": 653839,
        "end_time": 655440,
        "duration": 1601,
        "text": "production. I know that sounds like a"
      },
      {
        "start_time": 655440,
        "end_time": 657440,
        "duration": 2000,
        "text": "lot, and it is. I'm not going to tell"
      },
      {
        "start_time": 657440,
        "end_time": 659279,
        "duration": 1839,
        "text": "you that this will be easy, and I'm not"
      },
      {
        "start_time": 659279,
        "end_time": 660480,
        "duration": 1201,
        "text": "going to promise that if you learn to"
      },
      {
        "start_time": 660480,
        "end_time": 662079,
        "duration": 1599,
        "text": "code, you'll definitely get a job. The"
      },
      {
        "start_time": 662079,
        "end_time": 663760,
        "duration": 1681,
        "text": "market is harder than it was a few years"
      },
      {
        "start_time": 663760,
        "end_time": 666000,
        "duration": 2240,
        "text": "ago. AI is changing the way we work on a"
      },
      {
        "start_time": 666000,
        "end_time": 667680,
        "duration": 1680,
        "text": "daily basis, and the skills that matter"
      },
      {
        "start_time": 667680,
        "end_time": 669519,
        "duration": 1839,
        "text": "are changing, too. You've probably heard"
      },
      {
        "start_time": 669519,
        "end_time": 672000,
        "duration": 2481,
        "text": "some version of coding is dead recently."
      },
      {
        "start_time": 672000,
        "end_time": 674240,
        "duration": 2240,
        "text": "Maybe it was Nvidia's CEO saying nobody"
      },
      {
        "start_time": 674240,
        "end_time": 676079,
        "duration": 1839,
        "text": "will need to program anymore, or"
      },
      {
        "start_time": 676079,
        "end_time": 678560,
        "duration": 2481,
        "text": "Anthropic CEO predicting AI would write"
      },
      {
        "start_time": 678560,
        "end_time": 681040,
        "duration": 2480,
        "text": "90% of code within 6 months. That was"
      },
      {
        "start_time": 681040,
        "end_time": 682800,
        "duration": 1760,
        "text": "literally a year ago, by the way. But"
      },
      {
        "start_time": 682800,
        "end_time": 684640,
        "duration": 1840,
        "text": "like Francois Cholelay, the creator of"
      },
      {
        "start_time": 684640,
        "end_time": 686720,
        "duration": 2080,
        "text": "Keros pointed out, software engineering"
      },
      {
        "start_time": 686720,
        "end_time": 688640,
        "duration": 1920,
        "text": "has been within 6 months of being dead"
      },
      {
        "start_time": 688640,
        "end_time": 690959,
        "duration": 2319,
        "text": "continually since early 2023. And this"
      },
      {
        "start_time": 690959,
        "end_time": 693760,
        "duration": 2801,
        "text": "pattern is way older than AI. Forran was"
      },
      {
        "start_time": 693760,
        "end_time": 695200,
        "duration": 1440,
        "text": "supposed to let scientists write"
      },
      {
        "start_time": 695200,
        "end_time": 697200,
        "duration": 2000,
        "text": "programs without programmers. Cobalt's"
      },
      {
        "start_time": 697200,
        "end_time": 698959,
        "duration": 1759,
        "text": "English-like syntax was supposed to let"
      },
      {
        "start_time": 698959,
        "end_time": 701279,
        "duration": 2320,
        "text": "managers bypass developers entirely."
      },
      {
        "start_time": 701279,
        "end_time": 703519,
        "duration": 2240,
        "text": "Every major abstraction, compilers,"
      },
      {
        "start_time": 703519,
        "end_time": 705440,
        "duration": 1921,
        "text": "highle languages, object-oriented"
      },
      {
        "start_time": 705440,
        "end_time": 707600,
        "duration": 2160,
        "text": "programming, was pitched at making"
      },
      {
        "start_time": 707600,
        "end_time": 709440,
        "duration": 1840,
        "text": "software engineers obsolete. But in"
      },
      {
        "start_time": 709440,
        "end_time": 711120,
        "duration": 1680,
        "text": "reality, the demand for people who"
      },
      {
        "start_time": 711120,
        "end_time": 713600,
        "duration": 2480,
        "text": "understand systems didn't disappear. It"
      },
      {
        "start_time": 713600,
        "end_time": 715279,
        "duration": 1679,
        "text": "actually grew. So, you're not too late,"
      },
      {
        "start_time": 715279,
        "end_time": 716880,
        "duration": 1601,
        "text": "and don't let the haters get you down."
      },
      {
        "start_time": 716880,
        "end_time": 718160,
        "duration": 1280,
        "text": "If you want to learn how to code, but"
      },
      {
        "start_time": 718160,
        "end_time": 719680,
        "duration": 1520,
        "text": "don't know where to start, check out my"
      },
      {
        "start_time": 719680,
        "end_time": 723440,
        "duration": 3760,
        "text": "road map for Python. That's up next."
      }
    ],
    "hashtags": [
      {
        "hashtag": "#Verdent",
        "link": "https://www.youtube.com/hashtag/verdent"
      },
      {
        "hashtag": "#VerdentAI",
        "link": "https://www.youtube.com/hashtag/verdentai"
      },
      {
        "hashtag": "#vibecoding",
        "link": "https://www.youtube.com/hashtag/vibecoding"
      }
    ],
    "tags": [
      "learn to code",
      "ai and coding",
      "coding for beginners",
      "how to learn to code",
      "learn python",
      "vibe coding",
      "ai coding",
      "verdent",
      "verdentai",
      "vibecoding",
      "aicoding"
    ],
    "next_recommended_videos": [
      {
        "url": "https://www.youtube.com/channel/UCZf_9SblvM8iTTkouFEcHtA",
        "title": "Marina Wyss - AI & Machine Learning, channel",
        "thumbnail": "https://yt3.ggpht.com/IXHMIN2j4jNKdNMALWVtxi4b0h3_6d-QXMdmQpqAmyxLkrAL6zoAQgsLpr5j7GQWCfJvSyJYfg=s400-c-k-c0x00ffffff-no-rj",
        "startMs": 715248,
        "endMs": 721512,
        "style": "CHANNEL"
      },
      {
        "url": "https://www.youtube.com/watch?v=jEJD8M6rNoo",
        "title": "Python for Machine Learning: Skills That Actually Get You Hired (Complete Roadmap!), video",
        "thumbnail": "https://i.ytimg.com/vi/jEJD8M6rNoo/maxresdefault.jpg",
        "startMs": 715248,
        "endMs": 721512,
        "style": "VIDEO"
      }
    ],
    "recommended_videos": [
      {
        "url": "https://www.youtube.com/watch?v=fXojHUuBnaY&pp=ugUEEgJlbg%3D%3D",
        "title": "I Tried 50 Machine Learning Courses: Here are The BEST 5",
        "thumbnail": "https://i.ytimg.com/vi/fXojHUuBnaY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAfy6ZWXAiBdbcHF98EukL5WIEitw"
      },
      {
        "url": "https://www.youtube.com/watch?v=oshQg1uSRvg&pp=ugUHEgVlbi1VUw%3D%3D",
        "title": "How To Learn To Code In 2026",
        "thumbnail": "https://i.ytimg.com/vi/oshQg1uSRvg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIOm0FmiB3S01mFjcB4H-bRfeznw"
      },
      {
        "url": "https://www.youtube.com/watch?v=k0w3S3huyOE",
        "title": "I Dropped Half My AI Stack This Year. Here's What Actually Works.",
        "thumbnail": "https://i.ytimg.com/vi/k0w3S3huyOE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCEAkiVvbzELoGn0-uPgXQ9G67VnA"
      },
      {
        "url": "https://www.youtube.com/watch?v=Do8VuokPbBc&pp=ugUEEgJlbg%3D%3D",
        "title": "Coding interviews are completely different now (here's why)",
        "thumbnail": "https://i.ytimg.com/vi/Do8VuokPbBc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJ9Wo1DYSGX_MHJ7YxRPkH3dsq6Q"
      },
      {
        "url": "https://www.youtube.com/watch?v=EdZWPB1fIJc",
        "title": "Should You Learn Coding Now? Anthropic CEO Explains",
        "thumbnail": "https://i.ytimg.com/vi/EdZWPB1fIJc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDS07YQwJnOvxSLyX9BgA1GeGil-Q"
      },
      {
        "url": "https://www.youtube.com/watch?v=VwJdCikCFsA&pp=ugUEEgJlbg%3D%3D",
        "title": "The ONLY AI Vibe Coding Tool You Actually Need in 2026",
        "thumbnail": "https://i.ytimg.com/vi/VwJdCikCFsA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBW8-xo0JjHHIIF7GVJBd-vLODcBQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=_LGYDWBhFbg&pp=ugUEEgJlbg%3D%3D",
        "title": "Don’t Waste 2026 on the Wrong Career - How to Pick the PERFECT Tech Role",
        "thumbnail": "https://i.ytimg.com/vi/_LGYDWBhFbg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKaQIVfI4ugsKgKvn5Esntlwp1yQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=SaHHgzoXceU&pp=ugUEEgJlbg%3D%3D",
        "title": "It was more fun before AI",
        "thumbnail": "https://i.ytimg.com/vi/SaHHgzoXceU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA0zWrflCuCq7wPDPzcQ5F_61kg2A"
      },
      {
        "url": "https://www.youtube.com/watch?v=PZ_IMF-qzHc&pp=ugUEEgJlbg%3D%3D",
        "title": "Vibe Coding Problems are Popping Up",
        "thumbnail": "https://i.ytimg.com/vi/PZ_IMF-qzHc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBf1vo3o3KHw5j_4rMvg9Brk7dhBA"
      },
      {
        "url": "https://www.youtube.com/watch?v=aAItDrJ8-rE&pp=ugUEEgJlbg%3D%3D",
        "title": "How to Become an AI Engineer FAST (2026) | AI Engineering Roadmap",
        "thumbnail": "https://i.ytimg.com/vi/aAItDrJ8-rE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDezF_tEj1sj6nZbXbdcvlpG0eiTA"
      },
      {
        "url": "https://www.youtube.com/watch?v=9qMHDHQ__Ko&pp=ugUEEgJlbg%3D%3D",
        "title": "The 7 Skills Developers Actually Need in 2026",
        "thumbnail": "https://i.ytimg.com/vi/9qMHDHQ__Ko/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDOAEnsH9MqAJzrfFWO8lj69DlIKA"
      },
      {
        "url": "https://www.youtube.com/watch?v=TYuSEeuUhPo&pp=0gcJCdkKAYcqIYzv",
        "title": "Software engineer driven to insanity from 2026 Job Market",
        "thumbnail": "https://i.ytimg.com/vi/TYuSEeuUhPo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCn8iZmFkYJogLdgQsJr4D8Fd9qdg"
      }
    ],
    "transcript_language": [
      {
        "language": "English (auto-generated)",
        "auto_translate": true
      }
    ],
    "chapters": [
      {
        "title": "Should you still learn to code?",
        "time_stamp": null,
        "image": "https://i.ytimg.com/vi/zW9o8q2fXfM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDYu3qqSDDsVM1YVVXDR8HJuCS3Dg"
      },
      {
        "title": "What coding jobs look like now",
        "time_stamp": "209000",
        "image": "https://i.ytimg.com/vi/zW9o8q2fXfM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDYu3qqSDDsVM1YVVXDR8HJuCS3Dg"
      },
      {
        "title": "What actually matters in the job market of 2026",
        "time_stamp": "369000",
        "image": "https://i.ytimg.com/vi/zW9o8q2fXfM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDYu3qqSDDsVM1YVVXDR8HJuCS3Dg"
      },
      {
        "title": "What if AI gets WAY BETTER soon?",
        "time_stamp": "482000",
        "image": "https://i.ytimg.com/vi/zW9o8q2fXfM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDYu3qqSDDsVM1YVVXDR8HJuCS3Dg"
      },
      {
        "title": "Why learn when I can vibe code?",
        "time_stamp": "520000",
        "image": "https://i.ytimg.com/vi/zW9o8q2fXfM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDYu3qqSDDsVM1YVVXDR8HJuCS3Dg"
      },
      {
        "title": "What’s the point if the job market is impossible anyway?",
        "time_stamp": "545000",
        "image": "https://i.ytimg.com/vi/zW9o8q2fXfM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDYu3qqSDDsVM1YVVXDR8HJuCS3Dg"
      },
      {
        "title": "How to learn the right way",
        "time_stamp": "572000",
        "image": "https://i.ytimg.com/vi/zW9o8q2fXfM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDYu3qqSDDsVM1YVVXDR8HJuCS3Dg"
      }
    ],
    "transcription_language": "English",
    "is_age_restricted": false,
    "channel_url_decoded": "https://www.youtube.com/@MarinaWyssAI",
    "timestamp": "2026-04-08T15:19:57.095Z",
    "input": {
      "url": "https://www.youtube.com/watch?v=zW9o8q2fXfM",
      "transcription_language": "English",
      "country": ""
    }
  },
  {
    "url": "https://www.youtube.com/watch?v=qxTe5QT5R3c",
    "title": "Vibe Coders Will Never Succeed",
    "youtuber": "@KyleCookWDS",
    "youtuber_md5": "995c7b5de588cac247e52ccb2734e5e9",
    "video_url": "https://rr3---sn-cnoa-jv3s.googlevideo.com/videoplayback?expire=1775683168&ei=AHLWacHJEYDa3LUPopSNiQ0&ip=rfad2dd26b60cd4c4dbeaeb39f1800c0f&id=o-AH0RVCzcr73TMRhC2WTf7KqIcZz2TsBscehOo-RMKNCH&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=296&met=1775661568%2C&mh=OP&mm=31%2C29&mn=sn-cnoa-jv3s%2Csn-h557sns7&ms=au%2Crdu&mv=m&mvi=3&pl=22&rms=au%2Cau&initcwndbps=1750000&bui=AUUZDGJDbfW0lUBu0eVCvbcNVmsSm_Y8NjRuzYtHWqKdr27iB-tQtJQFCpOsw6Rb3qbFpY0m2mD4XuER&spc=jlWavV29rBqG7aPA0_qTpWOzlGS1WHCf0CcCP6ChnWbnsCG6p6eWPclDZloPymSkPLkr3P6M&vprv=1&svpuc=1&mime=video%2Fmp4&ns=nePPmgOG9Uvq9wAoYmWd2usU&rqh=1&gir=yes&clen=14215731&ratebypass=yes&dur=352.362&lmt=1775256042984886&mt=1775660974&fvip=1&fexp=51565115%2C51565682%2C51869322&c=WEB&sefc=1&txp=5438534&n=q97VuyzOOTWJxnA4&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AHEqNM4wRgIhALHIXbCSSiIlYYSQTkV3dxQuQjS1k4skBv4qlqhfPvz2AiEAzYfZhVuHHn3qI6V8iMlLJX0LV4ck2scUgKWteoH1vwY%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIgN69x8MlRoS3qEbCLxdfvqsi6cT_vU3sEnsYZ9bTlIzQCIQDoJrfkFgSO-mKbn8xWH9PSUd9FCN1q6Y-DR1V0uCuuiw%3D%3D",
    "video_length": 352,
    "likes": 2109,
    "views": 34397,
    "date_posted": "2026-04-03T21:11:13.000Z",
    "description": "My Courses: https://courses.webdevsimplified.com\n\nMain Channel: https://www.youtube.com/@WebDevSimplified\nMy Blog: https://blog.webdevsimplified.com\n\nPatreon: https://www.patreon.com/WebDevSimplified\nTwitter: https://twitter.com/DevSimplified\nDiscord: https://discord.gg/7StTjnR\nGitHub: https://github.com/WebDevSimplified\n\n\n#WebDevelopment #WDS #WebDevSimplified",
    "num_comments": 339,
    "video_id": "qxTe5QT5R3c",
    "channel_url": "https://www.youtube.com/@KyleCookWDS",
    "preview_image": "https://i.ytimg.com/vi_webp/qxTe5QT5R3c/maxresdefault.webp",
    "shortcode": "qxTe5QT5R3c",
    "verified": false,
    "handle_name": "Kyle Cook from Web Dev Simplified",
    "avatar_img_channel": "https://yt3.ggpht.com/T5KQ885UnFxjiffzWSC7dxFhhQVnn4sZYuwMwdCZ2luF20Snuzv_NXDYh8ZsrjRA1TX2v7fJMLY=s88-c-k-c0x00ffffff-no-rj",
    "is_sponsored": false,
    "related_videos": null,
    "license": null,
    "viewport_frames": "640x360 / -",
    "current_optimal_res": "640x360@30 / 640x360@30",
    "codecs": "avc1.42001E, mp4a.40.2 / mp4a.40.2",
    "color": "bt709",
    "quality": "hd1440",
    "quality_label": "1440p",
    "post_type": "post",
    "youtuber_id": "UCqj0nJDbz27eMHfhzUkwDbA",
    "transcript": "Imagine for a second that one friend that pretty much everyone has that has a million different really really cool game-changing ideas and they're always bouncing between different idea A, B, C, always coming up with something new that they want to do, implement, learn, whatever it is. We all know someone like this. Now imagine that person built out a brand new application for one of their ideas. They coded it all up themselves using AI because they're not a technical person. So they let AI write all the code. Would you trust the application that this person built? Would you enter sensitive information into this application? Banking details, payment information, credit card information. I know I wouldn't because these people, these people have a million ideas are bouncing back and forth. They're trying to build things super quick. They don't have the technical skills to even know what it is that they're building, if it's secure or not, and they're just throwing something up there quick to really sate the curiosity that is their idea. And there's nothing wrong with this. I think that AI having the ability for people to create these applications on their own is an amazing superpower for everyone because now you can essentially create your own bespoke application for your specific needs instead of needing to use something that doesn't quite fit your needs perfectly. The problem though comes when you try to take those one-off bespoke applications and scale them to the point where they can be used by anyone across the globe. If you don't have the technical skills to understand how security works, different best practices for how to handle user information, privacy, how to host things, and all these other skills, you're more than likely going to end up with an application that at the very least is going to have some bugs in it that you don't really know how to understand or fix, or they're going to end up with tons of different security flaws in them, which is a much much larger problem. We've already seen this with tons of different news articles talking about how different applications have had security breaches and they were essentially applications vibecoded by someone that didn't understand at a technical level what it was they were building. The AI was the one building out the tool, but they needed to take the responsibility and the understanding of how this security worked and they just didn't do that. And the AI didn't do it for them either because the AI was never told to or maybe it did it incorrectly. Now, this is a world where many people think that AI is going to replace them as a programmer. So, what I just talked about where that one-off developer creates a site on their own that has a security breach. Now, imagine that Google fires all of their developers and instead they're just going to have non-technical people vibe their entire application. Just think about the number of security vulnerabilities and issues you would have if you did that. If AI truly replaced every single developer, you're going to run into so many issues. Realistically, what's going to happen is that AI is a tool that a developer is going to use so that they can program faster. Just like you use an IDE with autocomplete and error checking to make sure you can build programs faster. Just like you're not handwriting assembly code or using punch cards, you're writing inside of a computer with a keyboard to do things faster so you can quickly iterate. These are just tools that you can use to be able to write your code quicker. But the important skill that you have as a developer is your brain and your ability to power problem solve and to think through things and to actually create code that is going to be high quality and understand what that code does. You know security best practices. You know how to handle hosting. You know how to scale applications across enterprise different things. You know just in general how to write clean, high-quality code that's going to be scalable and last across many different people using it. You know how to write performant code. You know all of these things that the AI may know some of, but unless you know how those things work, you can't actually tell the AI how to do it or check that the AI is doing those things correctly. This is why it doesn't matter how good the AI gets, you're always going to need someone overseeing what the AI is doing to make sure it's not only doing it correctly, but also helping to make sure that the AI does the things that it's supposed to do. Another thing to consider is as your applications grow in scale, it becomes much harder to make sure that your code is well written and works across all different aspects of your application. This is another instance where real developers, people with problem solving skills and technical knowledge are needed to make sure that the code is written in a way that will scale and to make sure all the different pieces of the puzzles fit together. If you don't actually understand code and you think, well, I don't need to learn to code anymore cuz the AI codes for me. All I need to do is just be a good problem solver, that is again not enough. Because if you don't know what the code is being outputed, you can't check to see how good it is. Imagine that you're becoming a translator and all you do is you use Google Translate or some AI to translate from one language to another and you just output whatever that thing translates to. If you don't know that other language, you have no way to know that the actual translation is correct. You're just hoping that the AI or translator gives you the correct information and you're just basing all of your livelihood on that. If this is a small off scenario where you're just trying to talk with a friend that speaks a different language than you, that's probably fine. It doesn't matter if you mess up. But now, if you're on the size of like an enterprise application dealing with banking software and million-dollar contracts, it kind of matters if you get the code correct. And if you're just outputting and generating code without knowing what it does or understanding how it works, you're bound to run into errors. Even if the AI only messes up 001% of the time, it is going to mess up eventually, and you need someone to oversee it to make sure that it does the correct thing. I am 100% not worried about vibe coding taking over programming jobs because vibe coding is something that's really really useful for small applications that are going to be used by just a handful of people or maybe just by yourself. I've personally vibe coded plenty of applications just for very one small off use cases that I have that I want to do something but it's not commercial and I don't care if it's got security problems or it's not maintainable cuz I'm just using it for like a one-off small little thing. As soon as you get to that larger enterprise application scale or even just a normal business scale, you need to have high quality code that you can depend on. And that is where you need a technical person with the understanding of how the code works to be able to write that code. Even if they're using AI to write that code, they need to understand what that AI is writing to make sure that the code is good and high quality. Now, making sure that that code is high quality means you need to be really good at code reviews. So, if you want to learn all about how to do code reviews, check out this video right over here, where I go through my 10-step process of how to create really high quality code review specifically around AI.",
    "formatted_transcript": [
      {
        "start_time": 0,
        "end_time": 2080,
        "duration": 2080,
        "text": "Imagine for a second that one friend"
      },
      {
        "start_time": 2080,
        "end_time": 4400,
        "duration": 2320,
        "text": "that pretty much everyone has that has a"
      },
      {
        "start_time": 4400,
        "end_time": 6080,
        "duration": 1680,
        "text": "million different really really cool"
      },
      {
        "start_time": 6080,
        "end_time": 8240,
        "duration": 2160,
        "text": "game-changing ideas and they're always"
      },
      {
        "start_time": 8240,
        "end_time": 10800,
        "duration": 2560,
        "text": "bouncing between different idea A, B, C,"
      },
      {
        "start_time": 10800,
        "end_time": 12320,
        "duration": 1520,
        "text": "always coming up with something new that"
      },
      {
        "start_time": 12320,
        "end_time": 13920,
        "duration": 1600,
        "text": "they want to do, implement, learn,"
      },
      {
        "start_time": 13920,
        "end_time": 16240,
        "duration": 2320,
        "text": "whatever it is. We all know someone like"
      },
      {
        "start_time": 16240,
        "end_time": 18880,
        "duration": 2640,
        "text": "this. Now imagine that person built out"
      },
      {
        "start_time": 18880,
        "end_time": 20640,
        "duration": 1760,
        "text": "a brand new application for one of their"
      },
      {
        "start_time": 20640,
        "end_time": 22400,
        "duration": 1760,
        "text": "ideas. They coded it all up themselves"
      },
      {
        "start_time": 22400,
        "end_time": 24400,
        "duration": 2000,
        "text": "using AI because they're not a technical"
      },
      {
        "start_time": 24400,
        "end_time": 26000,
        "duration": 1600,
        "text": "person. So they let AI write all the"
      },
      {
        "start_time": 26000,
        "end_time": 27920,
        "duration": 1920,
        "text": "code. Would you trust the application"
      },
      {
        "start_time": 27920,
        "end_time": 29920,
        "duration": 2000,
        "text": "that this person built? Would you enter"
      },
      {
        "start_time": 29920,
        "end_time": 31359,
        "duration": 1439,
        "text": "sensitive information into this"
      },
      {
        "start_time": 31359,
        "end_time": 33120,
        "duration": 1761,
        "text": "application? Banking details, payment"
      },
      {
        "start_time": 33120,
        "end_time": 35280,
        "duration": 2160,
        "text": "information, credit card information. I"
      },
      {
        "start_time": 35280,
        "end_time": 37440,
        "duration": 2160,
        "text": "know I wouldn't because these people,"
      },
      {
        "start_time": 37440,
        "end_time": 38960,
        "duration": 1520,
        "text": "these people have a million ideas are"
      },
      {
        "start_time": 38960,
        "end_time": 40320,
        "duration": 1360,
        "text": "bouncing back and forth. They're trying"
      },
      {
        "start_time": 40320,
        "end_time": 41680,
        "duration": 1360,
        "text": "to build things super quick. They don't"
      },
      {
        "start_time": 41680,
        "end_time": 43280,
        "duration": 1600,
        "text": "have the technical skills to even know"
      },
      {
        "start_time": 43280,
        "end_time": 44559,
        "duration": 1279,
        "text": "what it is that they're building, if"
      },
      {
        "start_time": 44559,
        "end_time": 46239,
        "duration": 1680,
        "text": "it's secure or not, and they're just"
      },
      {
        "start_time": 46239,
        "end_time": 47760,
        "duration": 1521,
        "text": "throwing something up there quick to"
      },
      {
        "start_time": 47760,
        "end_time": 49920,
        "duration": 2160,
        "text": "really sate the curiosity that is their"
      },
      {
        "start_time": 49920,
        "end_time": 51680,
        "duration": 1760,
        "text": "idea. And there's nothing wrong with"
      },
      {
        "start_time": 51680,
        "end_time": 53520,
        "duration": 1840,
        "text": "this. I think that AI having the ability"
      },
      {
        "start_time": 53520,
        "end_time": 55120,
        "duration": 1600,
        "text": "for people to create these applications"
      },
      {
        "start_time": 55120,
        "end_time": 57360,
        "duration": 2240,
        "text": "on their own is an amazing superpower"
      },
      {
        "start_time": 57360,
        "end_time": 59039,
        "duration": 1679,
        "text": "for everyone because now you can"
      },
      {
        "start_time": 59039,
        "end_time": 60399,
        "duration": 1360,
        "text": "essentially create your own bespoke"
      },
      {
        "start_time": 60399,
        "end_time": 62239,
        "duration": 1840,
        "text": "application for your specific needs"
      },
      {
        "start_time": 62239,
        "end_time": 63760,
        "duration": 1521,
        "text": "instead of needing to use something that"
      },
      {
        "start_time": 63760,
        "end_time": 65680,
        "duration": 1920,
        "text": "doesn't quite fit your needs perfectly."
      },
      {
        "start_time": 65680,
        "end_time": 67200,
        "duration": 1520,
        "text": "The problem though comes when you try to"
      },
      {
        "start_time": 67200,
        "end_time": 69119,
        "duration": 1919,
        "text": "take those one-off bespoke applications"
      },
      {
        "start_time": 69119,
        "end_time": 70560,
        "duration": 1441,
        "text": "and scale them to the point where they"
      },
      {
        "start_time": 70560,
        "end_time": 72880,
        "duration": 2320,
        "text": "can be used by anyone across the globe."
      },
      {
        "start_time": 72880,
        "end_time": 74560,
        "duration": 1680,
        "text": "If you don't have the technical skills"
      },
      {
        "start_time": 74560,
        "end_time": 76400,
        "duration": 1840,
        "text": "to understand how security works,"
      },
      {
        "start_time": 76400,
        "end_time": 78000,
        "duration": 1600,
        "text": "different best practices for how to"
      },
      {
        "start_time": 78000,
        "end_time": 80400,
        "duration": 2400,
        "text": "handle user information, privacy, how to"
      },
      {
        "start_time": 80400,
        "end_time": 82720,
        "duration": 2320,
        "text": "host things, and all these other skills,"
      },
      {
        "start_time": 82720,
        "end_time": 84240,
        "duration": 1520,
        "text": "you're more than likely going to end up"
      },
      {
        "start_time": 84240,
        "end_time": 85840,
        "duration": 1600,
        "text": "with an application that at the very"
      },
      {
        "start_time": 85840,
        "end_time": 87360,
        "duration": 1520,
        "text": "least is going to have some bugs in it"
      },
      {
        "start_time": 87360,
        "end_time": 88560,
        "duration": 1200,
        "text": "that you don't really know how to"
      },
      {
        "start_time": 88560,
        "end_time": 90320,
        "duration": 1760,
        "text": "understand or fix, or they're going to"
      },
      {
        "start_time": 90320,
        "end_time": 91840,
        "duration": 1520,
        "text": "end up with tons of different security"
      },
      {
        "start_time": 91840,
        "end_time": 93759,
        "duration": 1919,
        "text": "flaws in them, which is a much much"
      },
      {
        "start_time": 93759,
        "end_time": 96079,
        "duration": 2320,
        "text": "larger problem. We've already seen this"
      },
      {
        "start_time": 96079,
        "end_time": 97920,
        "duration": 1841,
        "text": "with tons of different news articles"
      },
      {
        "start_time": 97920,
        "end_time": 99439,
        "duration": 1519,
        "text": "talking about how different applications"
      },
      {
        "start_time": 99439,
        "end_time": 101439,
        "duration": 2000,
        "text": "have had security breaches and they were"
      },
      {
        "start_time": 101439,
        "end_time": 103119,
        "duration": 1680,
        "text": "essentially applications vibecoded by"
      },
      {
        "start_time": 103119,
        "end_time": 105040,
        "duration": 1921,
        "text": "someone that didn't understand at a"
      },
      {
        "start_time": 105040,
        "end_time": 106560,
        "duration": 1520,
        "text": "technical level what it was they were"
      },
      {
        "start_time": 106560,
        "end_time": 108399,
        "duration": 1839,
        "text": "building. The AI was the one building"
      },
      {
        "start_time": 108399,
        "end_time": 110159,
        "duration": 1760,
        "text": "out the tool, but they needed to take"
      },
      {
        "start_time": 110159,
        "end_time": 111840,
        "duration": 1681,
        "text": "the responsibility and the understanding"
      },
      {
        "start_time": 111840,
        "end_time": 113360,
        "duration": 1520,
        "text": "of how this security worked and they"
      },
      {
        "start_time": 113360,
        "end_time": 114880,
        "duration": 1520,
        "text": "just didn't do that. And the AI didn't"
      },
      {
        "start_time": 114880,
        "end_time": 116479,
        "duration": 1599,
        "text": "do it for them either because the AI was"
      },
      {
        "start_time": 116479,
        "end_time": 118240,
        "duration": 1761,
        "text": "never told to or maybe it did it"
      },
      {
        "start_time": 118240,
        "end_time": 120640,
        "duration": 2400,
        "text": "incorrectly. Now, this is a world where"
      },
      {
        "start_time": 120640,
        "end_time": 122399,
        "duration": 1759,
        "text": "many people think that AI is going to"
      },
      {
        "start_time": 122399,
        "end_time": 124560,
        "duration": 2161,
        "text": "replace them as a programmer. So, what I"
      },
      {
        "start_time": 124560,
        "end_time": 125920,
        "duration": 1360,
        "text": "just talked about where that one-off"
      },
      {
        "start_time": 125920,
        "end_time": 127360,
        "duration": 1440,
        "text": "developer creates a site on their own"
      },
      {
        "start_time": 127360,
        "end_time": 129360,
        "duration": 2000,
        "text": "that has a security breach. Now, imagine"
      },
      {
        "start_time": 129360,
        "end_time": 131120,
        "duration": 1760,
        "text": "that Google fires all of their"
      },
      {
        "start_time": 131120,
        "end_time": 132720,
        "duration": 1600,
        "text": "developers and instead they're just"
      },
      {
        "start_time": 132720,
        "end_time": 134800,
        "duration": 2080,
        "text": "going to have non-technical people vibe"
      },
      {
        "start_time": 134800,
        "end_time": 136959,
        "duration": 2159,
        "text": "their entire application. Just think"
      },
      {
        "start_time": 136959,
        "end_time": 138080,
        "duration": 1121,
        "text": "about the number of security"
      },
      {
        "start_time": 138080,
        "end_time": 139360,
        "duration": 1280,
        "text": "vulnerabilities and issues you would"
      },
      {
        "start_time": 139360,
        "end_time": 141360,
        "duration": 2000,
        "text": "have if you did that. If AI truly"
      },
      {
        "start_time": 141360,
        "end_time": 143440,
        "duration": 2080,
        "text": "replaced every single developer, you're"
      },
      {
        "start_time": 143440,
        "end_time": 146080,
        "duration": 2640,
        "text": "going to run into so many issues."
      },
      {
        "start_time": 146080,
        "end_time": 147840,
        "duration": 1760,
        "text": "Realistically, what's going to happen is"
      },
      {
        "start_time": 147840,
        "end_time": 150319,
        "duration": 2479,
        "text": "that AI is a tool that a developer is"
      },
      {
        "start_time": 150319,
        "end_time": 151920,
        "duration": 1601,
        "text": "going to use so that they can program"
      },
      {
        "start_time": 151920,
        "end_time": 154239,
        "duration": 2319,
        "text": "faster. Just like you use an IDE with"
      },
      {
        "start_time": 154239,
        "end_time": 155760,
        "duration": 1521,
        "text": "autocomplete and error checking to make"
      },
      {
        "start_time": 155760,
        "end_time": 157760,
        "duration": 2000,
        "text": "sure you can build programs faster. Just"
      },
      {
        "start_time": 157760,
        "end_time": 159200,
        "duration": 1440,
        "text": "like you're not handwriting assembly"
      },
      {
        "start_time": 159200,
        "end_time": 160720,
        "duration": 1520,
        "text": "code or using punch cards, you're"
      },
      {
        "start_time": 160720,
        "end_time": 162319,
        "duration": 1599,
        "text": "writing inside of a computer with a"
      },
      {
        "start_time": 162319,
        "end_time": 163920,
        "duration": 1601,
        "text": "keyboard to do things faster so you can"
      },
      {
        "start_time": 163920,
        "end_time": 165840,
        "duration": 1920,
        "text": "quickly iterate. These are just tools"
      },
      {
        "start_time": 165840,
        "end_time": 167120,
        "duration": 1280,
        "text": "that you can use to be able to write"
      },
      {
        "start_time": 167120,
        "end_time": 168800,
        "duration": 1680,
        "text": "your code quicker. But the important"
      },
      {
        "start_time": 168800,
        "end_time": 170480,
        "duration": 1680,
        "text": "skill that you have as a developer is"
      },
      {
        "start_time": 170480,
        "end_time": 172080,
        "duration": 1600,
        "text": "your brain and your ability to power"
      },
      {
        "start_time": 172080,
        "end_time": 173519,
        "duration": 1439,
        "text": "problem solve and to think through"
      },
      {
        "start_time": 173519,
        "end_time": 175760,
        "duration": 2241,
        "text": "things and to actually create code that"
      },
      {
        "start_time": 175760,
        "end_time": 177360,
        "duration": 1600,
        "text": "is going to be high quality and"
      },
      {
        "start_time": 177360,
        "end_time": 179360,
        "duration": 2000,
        "text": "understand what that code does. You know"
      },
      {
        "start_time": 179360,
        "end_time": 181040,
        "duration": 1680,
        "text": "security best practices. You know how to"
      },
      {
        "start_time": 181040,
        "end_time": 182640,
        "duration": 1600,
        "text": "handle hosting. You know how to scale"
      },
      {
        "start_time": 182640,
        "end_time": 184400,
        "duration": 1760,
        "text": "applications across enterprise different"
      },
      {
        "start_time": 184400,
        "end_time": 186239,
        "duration": 1839,
        "text": "things. You know just in general how to"
      },
      {
        "start_time": 186239,
        "end_time": 187840,
        "duration": 1601,
        "text": "write clean, high-quality code that's"
      },
      {
        "start_time": 187840,
        "end_time": 189680,
        "duration": 1840,
        "text": "going to be scalable and last across"
      },
      {
        "start_time": 189680,
        "end_time": 191440,
        "duration": 1760,
        "text": "many different people using it. You know"
      },
      {
        "start_time": 191440,
        "end_time": 193280,
        "duration": 1840,
        "text": "how to write performant code. You know"
      },
      {
        "start_time": 193280,
        "end_time": 194959,
        "duration": 1679,
        "text": "all of these things that the AI may know"
      },
      {
        "start_time": 194959,
        "end_time": 197120,
        "duration": 2161,
        "text": "some of, but unless you know how those"
      },
      {
        "start_time": 197120,
        "end_time": 198640,
        "duration": 1520,
        "text": "things work, you can't actually tell the"
      },
      {
        "start_time": 198640,
        "end_time": 201120,
        "duration": 2480,
        "text": "AI how to do it or check that the AI is"
      },
      {
        "start_time": 201120,
        "end_time": 202959,
        "duration": 1839,
        "text": "doing those things correctly. This is"
      },
      {
        "start_time": 202959,
        "end_time": 204879,
        "duration": 1920,
        "text": "why it doesn't matter how good the AI"
      },
      {
        "start_time": 204879,
        "end_time": 206480,
        "duration": 1601,
        "text": "gets, you're always going to need"
      },
      {
        "start_time": 206480,
        "end_time": 208560,
        "duration": 2080,
        "text": "someone overseeing what the AI is doing"
      },
      {
        "start_time": 208560,
        "end_time": 210000,
        "duration": 1440,
        "text": "to make sure it's not only doing it"
      },
      {
        "start_time": 210000,
        "end_time": 211599,
        "duration": 1599,
        "text": "correctly, but also helping to make sure"
      },
      {
        "start_time": 211599,
        "end_time": 213120,
        "duration": 1521,
        "text": "that the AI does the things that it's"
      },
      {
        "start_time": 213120,
        "end_time": 214640,
        "duration": 1520,
        "text": "supposed to do. Another thing to"
      },
      {
        "start_time": 214640,
        "end_time": 217200,
        "duration": 2560,
        "text": "consider is as your applications grow in"
      },
      {
        "start_time": 217200,
        "end_time": 219040,
        "duration": 1840,
        "text": "scale, it becomes much harder to make"
      },
      {
        "start_time": 219040,
        "end_time": 220720,
        "duration": 1680,
        "text": "sure that your code is well written and"
      },
      {
        "start_time": 220720,
        "end_time": 222400,
        "duration": 1680,
        "text": "works across all different aspects of"
      },
      {
        "start_time": 222400,
        "end_time": 223920,
        "duration": 1520,
        "text": "your application. This is another"
      },
      {
        "start_time": 223920,
        "end_time": 225519,
        "duration": 1599,
        "text": "instance where real developers, people"
      },
      {
        "start_time": 225519,
        "end_time": 226959,
        "duration": 1440,
        "text": "with problem solving skills and"
      },
      {
        "start_time": 226959,
        "end_time": 228640,
        "duration": 1681,
        "text": "technical knowledge are needed to make"
      },
      {
        "start_time": 228640,
        "end_time": 229920,
        "duration": 1280,
        "text": "sure that the code is written in a way"
      },
      {
        "start_time": 229920,
        "end_time": 231680,
        "duration": 1760,
        "text": "that will scale and to make sure all the"
      },
      {
        "start_time": 231680,
        "end_time": 233120,
        "duration": 1440,
        "text": "different pieces of the puzzles fit"
      },
      {
        "start_time": 233120,
        "end_time": 234799,
        "duration": 1679,
        "text": "together. If you don't actually"
      },
      {
        "start_time": 234799,
        "end_time": 236560,
        "duration": 1761,
        "text": "understand code and you think, well, I"
      },
      {
        "start_time": 236560,
        "end_time": 237920,
        "duration": 1360,
        "text": "don't need to learn to code anymore cuz"
      },
      {
        "start_time": 237920,
        "end_time": 240080,
        "duration": 2160,
        "text": "the AI codes for me. All I need to do is"
      },
      {
        "start_time": 240080,
        "end_time": 242000,
        "duration": 1920,
        "text": "just be a good problem solver, that is"
      },
      {
        "start_time": 242000,
        "end_time": 243680,
        "duration": 1680,
        "text": "again not enough. Because if you don't"
      },
      {
        "start_time": 243680,
        "end_time": 245599,
        "duration": 1919,
        "text": "know what the code is being outputed,"
      },
      {
        "start_time": 245599,
        "end_time": 247519,
        "duration": 1920,
        "text": "you can't check to see how good it is."
      },
      {
        "start_time": 247519,
        "end_time": 249040,
        "duration": 1521,
        "text": "Imagine that you're becoming a"
      },
      {
        "start_time": 249040,
        "end_time": 250560,
        "duration": 1520,
        "text": "translator and all you do is you use"
      },
      {
        "start_time": 250560,
        "end_time": 252720,
        "duration": 2160,
        "text": "Google Translate or some AI to translate"
      },
      {
        "start_time": 252720,
        "end_time": 254640,
        "duration": 1920,
        "text": "from one language to another and you"
      },
      {
        "start_time": 254640,
        "end_time": 255840,
        "duration": 1200,
        "text": "just output whatever that thing"
      },
      {
        "start_time": 255840,
        "end_time": 257680,
        "duration": 1840,
        "text": "translates to. If you don't know that"
      },
      {
        "start_time": 257680,
        "end_time": 259199,
        "duration": 1519,
        "text": "other language, you have no way to know"
      },
      {
        "start_time": 259199,
        "end_time": 261120,
        "duration": 1921,
        "text": "that the actual translation is correct."
      },
      {
        "start_time": 261120,
        "end_time": 263120,
        "duration": 2000,
        "text": "You're just hoping that the AI or"
      },
      {
        "start_time": 263120,
        "end_time": 264479,
        "duration": 1359,
        "text": "translator gives you the correct"
      },
      {
        "start_time": 264479,
        "end_time": 266240,
        "duration": 1761,
        "text": "information and you're just basing all"
      },
      {
        "start_time": 266240,
        "end_time": 268400,
        "duration": 2160,
        "text": "of your livelihood on that. If this is a"
      },
      {
        "start_time": 268400,
        "end_time": 269680,
        "duration": 1280,
        "text": "small off scenario where you're just"
      },
      {
        "start_time": 269680,
        "end_time": 270960,
        "duration": 1280,
        "text": "trying to talk with a friend that speaks"
      },
      {
        "start_time": 270960,
        "end_time": 272479,
        "duration": 1519,
        "text": "a different language than you, that's"
      },
      {
        "start_time": 272479,
        "end_time": 273759,
        "duration": 1280,
        "text": "probably fine. It doesn't matter if you"
      },
      {
        "start_time": 273759,
        "end_time": 275919,
        "duration": 2160,
        "text": "mess up. But now, if you're on the size"
      },
      {
        "start_time": 275919,
        "end_time": 277360,
        "duration": 1441,
        "text": "of like an enterprise application"
      },
      {
        "start_time": 277360,
        "end_time": 278800,
        "duration": 1440,
        "text": "dealing with banking software and"
      },
      {
        "start_time": 278800,
        "end_time": 280800,
        "duration": 2000,
        "text": "million-dollar contracts, it kind of"
      },
      {
        "start_time": 280800,
        "end_time": 282479,
        "duration": 1679,
        "text": "matters if you get the code correct. And"
      },
      {
        "start_time": 282479,
        "end_time": 283919,
        "duration": 1440,
        "text": "if you're just outputting and generating"
      },
      {
        "start_time": 283919,
        "end_time": 285440,
        "duration": 1521,
        "text": "code without knowing what it does or"
      },
      {
        "start_time": 285440,
        "end_time": 287120,
        "duration": 1680,
        "text": "understanding how it works, you're bound"
      },
      {
        "start_time": 287120,
        "end_time": 289280,
        "duration": 2160,
        "text": "to run into errors. Even if the AI only"
      },
      {
        "start_time": 289280,
        "end_time": 292080,
        "duration": 2800,
        "text": "messes up 001% of the time, it is going"
      },
      {
        "start_time": 292080,
        "end_time": 293520,
        "duration": 1440,
        "text": "to mess up eventually, and you need"
      },
      {
        "start_time": 293520,
        "end_time": 295199,
        "duration": 1679,
        "text": "someone to oversee it to make sure that"
      },
      {
        "start_time": 295199,
        "end_time": 298320,
        "duration": 3121,
        "text": "it does the correct thing. I am 100% not"
      },
      {
        "start_time": 298320,
        "end_time": 300400,
        "duration": 2080,
        "text": "worried about vibe coding taking over"
      },
      {
        "start_time": 300400,
        "end_time": 302479,
        "duration": 2079,
        "text": "programming jobs because vibe coding is"
      },
      {
        "start_time": 302479,
        "end_time": 304320,
        "duration": 1841,
        "text": "something that's really really useful"
      },
      {
        "start_time": 304320,
        "end_time": 305919,
        "duration": 1599,
        "text": "for small applications that are going to"
      },
      {
        "start_time": 305919,
        "end_time": 307759,
        "duration": 1840,
        "text": "be used by just a handful of people or"
      },
      {
        "start_time": 307759,
        "end_time": 309520,
        "duration": 1761,
        "text": "maybe just by yourself. I've personally"
      },
      {
        "start_time": 309520,
        "end_time": 311440,
        "duration": 1920,
        "text": "vibe coded plenty of applications just"
      },
      {
        "start_time": 311440,
        "end_time": 313680,
        "duration": 2240,
        "text": "for very one small off use cases that I"
      },
      {
        "start_time": 313680,
        "end_time": 315120,
        "duration": 1440,
        "text": "have that I want to do something but"
      },
      {
        "start_time": 315120,
        "end_time": 316400,
        "duration": 1280,
        "text": "it's not commercial and I don't care if"
      },
      {
        "start_time": 316400,
        "end_time": 317919,
        "duration": 1519,
        "text": "it's got security problems or it's not"
      },
      {
        "start_time": 317919,
        "end_time": 319520,
        "duration": 1601,
        "text": "maintainable cuz I'm just using it for"
      },
      {
        "start_time": 319520,
        "end_time": 321440,
        "duration": 1920,
        "text": "like a one-off small little thing. As"
      },
      {
        "start_time": 321440,
        "end_time": 322479,
        "duration": 1039,
        "text": "soon as you get to that larger"
      },
      {
        "start_time": 322479,
        "end_time": 324160,
        "duration": 1681,
        "text": "enterprise application scale or even"
      },
      {
        "start_time": 324160,
        "end_time": 326320,
        "duration": 2160,
        "text": "just a normal business scale, you need"
      },
      {
        "start_time": 326320,
        "end_time": 328080,
        "duration": 1760,
        "text": "to have high quality code that you can"
      },
      {
        "start_time": 328080,
        "end_time": 329840,
        "duration": 1760,
        "text": "depend on. And that is where you need a"
      },
      {
        "start_time": 329840,
        "end_time": 331360,
        "duration": 1520,
        "text": "technical person with the understanding"
      },
      {
        "start_time": 331360,
        "end_time": 333039,
        "duration": 1679,
        "text": "of how the code works to be able to"
      },
      {
        "start_time": 333039,
        "end_time": 334479,
        "duration": 1440,
        "text": "write that code. Even if they're using"
      },
      {
        "start_time": 334479,
        "end_time": 336320,
        "duration": 1841,
        "text": "AI to write that code, they need to"
      },
      {
        "start_time": 336320,
        "end_time": 338000,
        "duration": 1680,
        "text": "understand what that AI is writing to"
      },
      {
        "start_time": 338000,
        "end_time": 339520,
        "duration": 1520,
        "text": "make sure that the code is good and high"
      },
      {
        "start_time": 339520,
        "end_time": 341120,
        "duration": 1600,
        "text": "quality. Now, making sure that that code"
      },
      {
        "start_time": 341120,
        "end_time": 342560,
        "duration": 1440,
        "text": "is high quality means you need to be"
      },
      {
        "start_time": 342560,
        "end_time": 344080,
        "duration": 1520,
        "text": "really good at code reviews. So, if you"
      },
      {
        "start_time": 344080,
        "end_time": 345280,
        "duration": 1200,
        "text": "want to learn all about how to do code"
      },
      {
        "start_time": 345280,
        "end_time": 346800,
        "duration": 1520,
        "text": "reviews, check out this video right over"
      },
      {
        "start_time": 346800,
        "end_time": 348240,
        "duration": 1440,
        "text": "here, where I go through my 10-step"
      },
      {
        "start_time": 348240,
        "end_time": 349759,
        "duration": 1519,
        "text": "process of how to create really high"
      },
      {
        "start_time": 349759,
        "end_time": 351680,
        "duration": 1921,
        "text": "quality code review specifically around"
      },
      {
        "start_time": 351680,
        "end_time": 353919,
        "duration": 2239,
        "text": "AI."
      }
    ],
    "hashtags": [
      {
        "hashtag": "#WebDevelopment",
        "link": "https://www.youtube.com/hashtag/webdevelopment"
      },
      {
        "hashtag": "#WDS",
        "link": "https://www.youtube.com/hashtag/wds"
      },
      {
        "hashtag": "#WebDevSimplified",
        "link": "https://www.youtube.com/hashtag/webdevsimplified"
      }
    ],
    "tags": [],
    "next_recommended_videos": [
      {
        "url": "https://www.youtube.com/watch?v=aAppWoTlw74",
        "title": "If You Code with AI You Need to Follow this 10 Step Process, video",
        "thumbnail": "https://i.ytimg.com/vi_webp/aAppWoTlw74/maxresdefault.webp",
        "startMs": 340000,
        "endMs": 352300,
        "style": "VIDEO"
      }
    ],
    "recommended_videos": [
      {
        "url": "https://www.youtube.com/watch?v=aFcVKzfkJPk",
        "title": "Claude Mythos and the end of software",
        "thumbnail": "https://i.ytimg.com/vi/aFcVKzfkJPk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCcepa3IcSIsyLPIdeJ4xaNBcDKBQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=MpuMy5yipHM&pp=ugUHEgVlbi1VUw%3D%3D",
        "title": "Vibe coding is DEAD",
        "thumbnail": "https://i.ytimg.com/vi/MpuMy5yipHM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAj90FXin_cVqcRxW_lDLRZhqbHGg"
      },
      {
        "url": "https://www.youtube.com/watch?v=XRgGFQ0EgM0&pp=ugUHEgVlbi1VUw%3D%3D",
        "title": "Is Anthropic Telling the Truth?",
        "thumbnail": "https://i.ytimg.com/vi/XRgGFQ0EgM0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDYpxFZDT9V-z5vh2Y-Dahf-H2g1Q"
      },
      {
        "url": "https://www.youtube.com/watch?v=SoIlC8ZZOwc&pp=ugUEEgJlbg%3D%3D",
        "title": "DEVELOPERS ARE TIRED…",
        "thumbnail": "https://i.ytimg.com/vi/SoIlC8ZZOwc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDoLjisllBi5jqJCYINvuB_YdlMeA"
      },
      {
        "url": "https://www.youtube.com/watch?v=Wr3Sw8KwznE&pp=ugUEEgJlbtIHCQnaCgGHKiGM7w%3D%3D",
        "title": "A lot of you NEED to hear this",
        "thumbnail": "https://i.ytimg.com/vi/Wr3Sw8KwznE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAqZT91aVZ2NJDBwl5pIuqcHE-ZVQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=Mh4v64Nz2t0&pp=ugUEEgJlbg%3D%3D",
        "title": "The future of computer science",
        "thumbnail": "https://i.ytimg.com/vi/Mh4v64Nz2t0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA7Nksk2XKRgfbFGXYcNuvzO_Ja7g"
      },
      {
        "url": "https://www.youtube.com/watch?v=DG1wRgEpdO4",
        "title": "Anthropic Just Built an AI Too Dangerous to Release",
        "thumbnail": "https://i.ytimg.com/vi/DG1wRgEpdO4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD08XlYwoV3WalAZGR5ubCSTUY36w"
      },
      {
        "url": "https://www.youtube.com/watch?v=DNhjITZy7cQ",
        "title": "What Mythos & Glasswing by Anthropic mean for devs",
        "thumbnail": "https://i.ytimg.com/vi/DNhjITZy7cQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD66xqnH65zglV19cnehJm1VDMVpA"
      },
      {
        "url": "https://www.youtube.com/watch?v=DqXrYxQQYMo&pp=ugUEEgJlbg%3D%3D",
        "title": "You could always do this",
        "thumbnail": "https://i.ytimg.com/vi/DqXrYxQQYMo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDi7clhXusYglm2aLtsOqU66kK01g"
      },
      {
        "url": "https://www.youtube.com/watch?v=INGOC6-LLv0&pp=ugUEEgJlbg%3D%3D",
        "title": "An initiative to secure the world's software | Project Glasswing",
        "thumbnail": "https://i.ytimg.com/vi/INGOC6-LLv0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDP8mq2lVq1F4r2miEZcFXXUEDnpg"
      },
      {
        "url": "https://www.youtube.com/watch?v=MSeaxI7w9KM",
        "title": "The joy of coding is dead",
        "thumbnail": "https://i.ytimg.com/vi/MSeaxI7w9KM/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgXChDMA8=&rs=AOn4CLBIbtXdccbSOY-dc5R0bXQgwkr_yQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=JSuS-zXMVwE",
        "title": "Cursor ditches VS Code, but not everyone is happy...",
        "thumbnail": "https://i.ytimg.com/vi/JSuS-zXMVwE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAY12pAKrmz9diEFD0TmP7F6Eph9w"
      }
    ],
    "transcript_language": [
      {
        "language": "English (auto-generated)",
        "auto_translate": true
      }
    ],
    "chapters": null,
    "transcription_language": "English",
    "is_age_restricted": false,
    "channel_url_decoded": "https://www.youtube.com/@KyleCookWDS",
    "timestamp": "2026-04-08T15:20:10.178Z",
    "input": {
      "url": "https://www.youtube.com/watch?v=qxTe5QT5R3c",
      "transcription_language": "English",
      "country": ""
    }
  }
]