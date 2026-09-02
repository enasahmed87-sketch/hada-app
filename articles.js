// ================= ARTICLES (shared data) =================
// مصدر واحد لبيانات المقالات، أغلفة SVG، وتدرّجات العناوين
// يُستدعى من index.html و archive.html
const ARTICLES = [
  {
    illo: '🫧',
    color: '#E8F4F8',
    tag: { ar:'الجسم والدورة', en:'Body & Cycle' },
    title: { ar:'الانتفاخ والحلول السريعة', en:'Bloating & Quick Solutions' },
    body: {
      ar: `<p>الانتفاخ قبل الدورة وأثناءها من أكثر الأعراض شيوعًا، وسببه في الغالب تغيّر مستويات هرمون البروجسترون والإستروجين، اللي يؤثران على قدرة الجسم على التخلص من الماء الزائد. الجسم في هذه الفترة يحتجز سوائل أكثر من المعتاد في الأنسجة، مما يعطيك هذا الإحساس بالثقل والانتفاخ.</p>
      <p><strong>لماذا يحصل هذا؟</strong><br>عند ارتفاع البروجسترون بعد التبويض وانخفاضه قبيل الدورة، يُحفّز الجسم إفراز مادة الألدوستيرون التي تجعله يحتجز الصوديوم (الملح)، وحيث يذهب الصوديوم يذهب الماء — فالنتيجة: انتفاخ. يُضاف إلى ذلك أن البروجسترون يُبطّئ حركة القناة الهضمية، مما يزيد الغازات والإحساس بالامتلاء.</p>
      <p><strong>حلول سريعة تنجح فعليًا:</strong></p>
      <p>🚶‍♀️ <strong>المشي لمدة 20 دقيقة</strong> — يحرّك القناة الهضمية بشكل طبيعي ويساعد على طرد الغازات.</p>
      <p>💧 <strong>شربي الماء أكثر لا أقل</strong> — يبدو عكسيًا لكن الماء يساعد الكلى على التخلص من الصوديوم الزائد وبالتالي السوائل المحتجزة.</p>
      <p>🧂 <strong>قللي الملح</strong> — خصوصًا الأطعمة المصنّعة والوجبات السريعة في الأيام الأربعة إلى الخمسة التي تسبق الدورة.</p>
      <p>🍵 <strong>شاي النعناع أو الزنجبيل</strong> — يساعدان على تهدئة التقلصات وتقليل الغازات.</p>
      <p>🥦 <strong>تجنّبي مؤقتًا</strong> البروكلي والملفوف والبقوليات والمشروبات الغازية في هذه الأيام — مع إنها صحية عمومًا، لكنها تُضاعف الغازات في هذه الفترة.</p>
      <p>🧘‍♀️ <strong>وضعية "طفل اليوغا"</strong> — الجلوس بهذه الوضعية خمس دقائق يُخفّف ضغط البطن ويساعد في طرد الغازات بشكل لطيف.</p>
      <p>الانتفاخ الدوري ليس خطأ فيكِ ولا في تغذيتك — هو استجابة بيولوجية طبيعية، ومعظمه يختفي بمجرد نزول الدورة.</p>`,
      en: `<p>Bloating before and during your period is one of the most common symptoms, and it's mainly caused by shifting levels of progesterone and estrogen — hormones that affect your body's ability to release excess water. During this time, your body retains more fluid than usual in its tissues, creating that familiar heavy, bloated feeling.</p>
      <p><strong>Why does this happen?</strong><br>When progesterone rises after ovulation and then drops before your period, it triggers the release of aldosterone — a hormone that causes your body to hold onto sodium (salt). Where sodium goes, water follows — so the result is bloating. Progesterone also slows the digestive tract, increasing gas and that "full" sensation.</p>
      <p><strong>Quick solutions that actually work:</strong></p>
      <p>🚶‍♀️ <strong>Walk for 20 minutes</strong> — naturally stimulates the digestive tract and helps release gas.</p>
      <p>💧 <strong>Drink more water, not less</strong> — counterintuitive, but water helps the kidneys flush out excess sodium and the fluid it's holding onto.</p>
      <p>🧂 <strong>Reduce salt</strong> — especially processed foods and fast food in the four to five days before your period.</p>
      <p>🍵 <strong>Peppermint or ginger tea</strong> — soothing for cramps and effective at reducing gas.</p>
      <p>🥦 <strong>Temporarily avoid</strong> broccoli, cabbage, legumes, and fizzy drinks during these days — healthy foods generally, but they amplify gas during this window.</p>
      <p>🧘‍♀️ <strong>Child's pose</strong> — five minutes in this yoga position relieves abdominal pressure and helps release gas gently.</p>
      <p>Cyclical bloating is not a flaw in you or your diet — it's a normal biological response, and most of it disappears as soon as your period starts.</p>`
    }
  },
  {
    illo: '💞',
    color: '#FDF0F0',
    tag: { ar:'العلاقات والهرمونات', en:'Relationships & Hormones' },
    title: { ar:'احمي علاقاتك في أيام التقلبات', en:'Guard Your Relationships Through Hormonal Shifts' },
    body: {
      ar: `<p>من أصعب جوانب التقلبات الهرمونية أنها لا تؤثر فقط على كيفية شعورك بنفسك، بل على كيفية معالجتك للكلمات والنظرات والمواقف التي يتصرف بها من حولك. في أيام معينة من الدورة، وبشكل خاص في المرحلة الأصفرية وقبل الحيض، تصبح الحساسية العاطفية أعلى بشكل ملحوظ — ليس ضعفًا، بل تغيّرًا بيولوجيًا فعليًا في كيفية معالجة الدماغ للمعلومات العاطفية.</p>
      <p><strong>ما الذي يحصل في الدماغ؟</strong><br>عندما ينخفض الإستروجين قبيل الدورة، تنخفض معه مستويات السيروتونين (هرمون السعادة)، مما يجعل ردود فعلك العاطفية أسرع وأقوى. ما كنتِ تتجاوزينه بسهولة في أيام التبويض قد يثير توترًا حقيقيًا في أيام PMS — والسبب كيميائي، ليس شخصيًا.</p>
      <p><strong>أشياء تنجح فعليًا في حماية علاقاتك:</strong></p>
      <p>🗓️ <strong>اعرفي موعد هذه الأيام مسبقًا</strong> — عندما تعرفين أن "هذا الأسبوع حساس"، تصبحين أكثر وعيًا برد فعلك الأول قبل التصرف به.</p>
      <p>💬 <strong>أخبري من تثقين بهم</strong> — ليس شرطًا الشرح المطوّل. جملة بسيطة مثل "أنا هذه الأيام حساسة أكثر من المعتاد" تُهيّئ الطرف الآخر للتعامل بلطف أكبر.</p>
      <p>⏸️ <strong>أجّلي المواجهات غير العاجلة</strong> — لو فيه موضوع يضايقك في علاقة معينة، لا تجعلي أيام PMS هي وقت إثارته. اكتبيه وعودي إليه بعد الدورة.</p>
      <p>🤍 <strong>تعلّمي الفرق بين شعور حقيقي وردة فعل كيميائية</strong> — الشعور قد يكون حقيقيًا، لكن شدته قد تكون مُضخّمة هرمونيًا. سأل نفسك: "هل سأشعر بنفس الشدة بعد ثلاثة أيام؟"</p>
      <p>العلاقات لا تتضرر من الحساسية — تتضرر من ردود الفعل التي نندم عليها لاحقًا. الوعي يمنحك خيارًا.</p>`,
      en: `<p>One of the hardest aspects of hormonal shifts is that they don't just affect how you feel — they affect how you process the words, looks, and actions of people around you. On certain days of your cycle, particularly during the luteal phase and before your period, emotional sensitivity rises noticeably. This isn't weakness — it's an actual biological change in how the brain processes emotional information.</p>
      <p><strong>What's happening in your brain?</strong><br>When estrogen drops before your period, serotonin (the mood-regulating neurotransmitter) drops with it, making emotional reactions faster and more intense. What you'd easily brush off during ovulation can feel genuinely upsetting during PMS — and the reason is chemical, not personal.</p>
      <p><strong>Things that actually work to protect your relationships:</strong></p>
      <p>🗓️ <strong>Know when these days are coming</strong> — when you know "this week is sensitive," you become more aware of your first reaction before you act on it.</p>
      <p>💬 <strong>Tell people you trust</strong> — a simple "I'm more sensitive than usual this week" prepares the other person to respond with more care.</p>
      <p>⏸️ <strong>Postpone non-urgent confrontations</strong> — if something's bothering you in a relationship, PMS days aren't the time to bring it up. Write it down and return to it after your period.</p>
      <p>🤍 <strong>Learn the difference between a real feeling and a chemical reaction</strong> — the feeling may be real, but its intensity may be hormonally amplified. Ask yourself: "Will I feel this strongly in three days?"</p>
      <p>Relationships aren't damaged by sensitivity — they're damaged by reactions we regret later. Awareness gives you a choice.</p>`
    }
  },
  {
    illo: '🪞',
    color: '#F0F8F0',
    tag: { ar:'الصحة النفسية', en:'Mental Wellbeing' },
    title: { ar:'افهمي نفسك وتصالحي معها', en:'Understand Yourself & Make Peace with Who You Are' },
    body: {
      ar: `<p>واحدة من أكثر الجمل التي تكررت في أبحاث علم النفس الإيجابي هي: "معظم المعاناة النفسية لا تأتي من الحياة نفسها، بل من المسافة بين ما نتوقعه من أنفسنا وما نحن عليه فعلًا." بمعنى آخر، كثير من التعب العاطفي الذي تشعرين به لا يأتي من ظروفك — يأتي من حكمك على نفسك بسبب هذه الظروف.</p>
      <p><strong>الوعي الذاتي ليس نقدًا ذاتيًا</strong><br>كثيرًا ما نخلط بين فهم النفس والجلد الذاتي. فهم النفس يعني مراقبة أنماطك باهتمام وفضول، مثلما تراقبين غريبة تجدينها مثيرة للاهتمام — لا بعيون قاضٍ. لماذا أتصرف هكذا في المواقف الضاغطة؟ لماذا يؤثر في هذا الشيء بالتحديد وليس ذاك؟ ما الذي تحاول هذه ردة الفعل أن تقوله لي؟</p>
      <p><strong>التصالح لا يعني القبول بكل شيء</strong><br>التصالح مع النفس لا يعني "أنا بخير مع كل ما أفعله." يعني: "أنا أرى نفسي بوضوح، وأعترف بما يحتاج إلى تغيير، وفي نفس الوقت لا أجعل أخطائي تُعرّف قيمتي." هذا التوازن الدقيق — بين المساءلة واللطف مع الذات — هو ما يُميّز الصحة النفسية الحقيقية عن الإنكار أو الجلد الذاتي.</p>
      <p><strong>خطوة عملية:</strong><br>في المرة القادمة التي تضايقين فيها نفسك بسبب تصرف أو شعور، جرّبي أن تسأل: "لو صديقة مقرّبة جدًا أخبرتني بنفس الموقف، ماذا كنت سأقول لها؟" ثم قولي لنفسك نفس الشيء. الفجوة بين ما نقوله للآخرين وما نقوله لأنفسنا هي مكان كثير من الجرح الداخلي.</p>
      <p>فهم النفس رحلة، وليست وجهة. كل يوم سجّلتِ فيه ما تشعرين به — حتى لو بجملة واحدة — هو خطوة حقيقية في هذه الرحلة.</p>`,
      en: `<p>One of the most repeated findings in positive psychology research is: "Most psychological suffering doesn't come from life itself — it comes from the gap between what we expect of ourselves and what we actually are." In other words, much of the emotional exhaustion you feel doesn't come from your circumstances — it comes from how you judge yourself because of those circumstances.</p>
      <p><strong>Self-awareness is not self-criticism</strong><br>We often confuse understanding ourselves with attacking ourselves. Understanding yourself means observing your own patterns with curiosity and interest — the way you'd observe someone fascinating, not through the eyes of a judge. Why do I act this way under pressure? Why does this particular thing affect me and not that? What is this reaction trying to tell me?</p>
      <p><strong>Making peace doesn't mean accepting everything</strong><br>Making peace with yourself doesn't mean "I'm fine with everything I do." It means: "I see myself clearly, I acknowledge what needs to change, and at the same time I won't let my mistakes define my worth." This delicate balance — between accountability and self-compassion — is what separates genuine mental health from both denial and self-attack.</p>
      <p><strong>One practical step:</strong><br>The next time you're harsh with yourself about a feeling or action, try asking: "If a close friend told me about this same situation, what would I say to her?" Then say the same thing to yourself. The gap between what we say to others and what we say to ourselves is where a lot of inner hurt lives.</p>
      <p>Understanding yourself is a journey, not a destination. Every day you log how you feel — even in just one sentence — is a real step on that journey.</p>`
    }
  },
  {
    illo: '🌹',
    color: '#FEF0F6',
    tag: { ar:'الهرمونات والمشاعر', en:'Hormones & Feelings' },
    title: { ar:'لماذا نشتاق للحب في أيام معينة؟', en:'Why We Crave Love & Connection on Certain Days' },
    body: {
      ar: `<p>إذا لاحظتِ أن رغبتك في القرب من الآخرين، أو حاجتك للتعبير عن المشاعر أو استقبالها، تتفاوت بشكل ملحوظ خلال الشهر — فأنتِ لا تتخيّلين. هذا التفاوت حقيقي تمامًا، وله تفسير هرموني واضح.</p>
      <p><strong>أيام التبويض: قمة الانجذاب والاتصال</strong><br>في منتصف الدورة تقريبًا، يرتفع هرمون الإستروجين والتستوستيرون معًا لدى المرأة، وهذا يُحفّز دوائر الدماغ المرتبطة بالمكافأة والاتصال الاجتماعي. تصبحين أكثر انجذابًا للآخرين وأكثر رغبة في الاقتراب منهم — وهذا من الناحية التطورية منطقي تمامًا، لأن هذه هي أيام الخصوبة.</p>
      <p><strong>أيام ما قبل الحيض: الحاجة للأمان والتواصل</strong><br>في المرحلة الأصفرية (بعد التبويض)، يرتفع البروجسترون الذي يُهيّئ الجسم للحمل المحتمل. يُرافق ذلك ارتفاع في الحاجة للأمان والتواصل العاطفي — ليس بالضرورة بالمعنى الرومانسي، بل بمعنى الحاجة للشعور بأنك محبوبة ومفهومة ومدعومة.</p>
      <p><strong>ماذا تفعل بهذه المعلومة؟</strong><br>أولًا: لا تشعري بالخجل. هذه ليست "ضعفًا" أو "احتياجًا مبالغًا فيه" — هي استجابة طبيعية لتغيّرات كيميائية حقيقية في جسمك.<br>ثانيًا: إذا كنتِ في علاقة، يمكنك أن تخبري شريكك باحتياجك للقرب في هذه الأيام — الوضوح أفضل من التوقع الضمني.<br>ثالثًا: إذا لم تكوني في علاقة، هذه الأيام قد تكون مناسبة لقضاء وقت مع صديقات أو أشخاص تشعرين معهم بالاتصال الحقيقي.</p>
      <p>فهم "لماذا" يُغيّر علاقتك مع "ماذا تشعرين." عندما تعرفين أن هذا الاشتياق له سبب بيولوجي، يصبح أقل إرهاقًا وأكثر قابلية للتعامل معه بحكمة.</p>`,
      en: `<p>If you've noticed that your need for closeness, your desire to express or receive affection, and your pull toward connection seem to shift noticeably across the month — you're not imagining things. This variation is entirely real, and it has a clear hormonal explanation.</p>
      <p><strong>Around ovulation: the peak of attraction and connection</strong><br>In the middle of your cycle, both estrogen and testosterone rise together, activating the brain's reward and social bonding circuits. You become more drawn to others and more open to closeness — and from an evolutionary standpoint, this makes complete sense, because these are your fertile days.</p>
      <p><strong>Pre-period days: the need for safety and emotional belonging</strong><br>During the luteal phase (after ovulation), progesterone rises as the body prepares for possible pregnancy. This comes with a heightened need for security and emotional connection — not necessarily in a romantic sense, but in the sense of needing to feel loved, understood, and supported.</p>
      <p><strong>What to do with this information?</strong><br>First: don't feel embarrassed. This isn't weakness or excessive neediness — it's a natural response to real chemical shifts in your body.<br>Second: if you're in a relationship, you can tell your partner you need more closeness during these days. Clarity beats silent expectation every time.<br>Third: if you're not in a relationship, these days may be a good time to spend with friends or people you feel genuinely connected to.</p>
      <p>Understanding "why" changes your relationship with "what you feel." When you know that this longing has a biological reason, it becomes less overwhelming and more something you can navigate with wisdom.</p>`
    }
  },
  {
    illo: '🌙',
    color: '#EAF2F8',
    tag: { ar:'الإيمان والجسد', en:'Faith & Body' },
    title: { ar:'تقلباتك رحمة — رحلة مقدسة ونظام إلهي', en:'Your Hormonal Shifts Are a Sacred Design' },
    body: {
      ar: `<p>خلق الله سبحانه وتعالى جسم المرأة بنظام فريد، يتغير طوال الشهر مثل فصول السنة الأربعة. هذه التقلبات المزاجية والجسدية ليست عشوائية، وليست عيبًا أو نقصًا، بل هي تصميم إلهي متقن ومهيّأ خصيصًا لحمل أمانة الخلق والإنجاب. إنها رحلة مستمرة من العطاء والتجدد تتطلب تضحية كبيرة، ولكنها تحمل في طياتها رسالة عظيمة.</p>
      <p><strong>🌸 مرحلة الربيع — النشاط والعطاء</strong><br>يرتفع هرمون الإستروجين بعد الدورة الشهرية، فتشعرين بطاقة عالية وصفاء ذهني ورغبة في الإنجاز. وقت الشكر بالعمل الصالح، واستغلال هذه الطاقة في العبادة وخدمة من حولك.</p>
      <p><strong>☀️ مرحلة الصيف — الخصوبة والتواصل</strong><br>تصل الهرمونات إلى ذروتها وقت التبويض. أنتِ في أعلى مستويات التواصل والقدرة على العطاء والتعاطف. يوم جيد لمن تحبين.</p>
      <p><strong>🍂 مرحلة الخريف — الانسحاب والتأمل</strong><br>ينخفض الإستروجين ويرتفع البروجسترون. جسمك يهدأ ويتجه للداخل. وقت الذكر، وطلب الرفق من الله ومن نفسك.</p>
      <p><strong>❄️ مرحلة الشتاء — التجدد والراحة</strong><br>وهي فترة الحيض، حيث تنخفض الهرمونات إلى أدنى مستوياتها، ويحتاج جسدك إلى الراحة التامة لإعادة بناء نفسه. إذا لم تمتلكي القدرة الجسدية أو النفسية، فيكفي أن تلجئي للاستماع إلى الأذكار والقرآن الكريم — فالسماع عبادة تريح القلب.</p>
      <p><strong>💡 افهمي نفسك واشتركي معه في الرحلة</strong><br>سجّلي نمطك الشهري بدقة: مشاعرك، أعراضك، طاقتك. ستكتشفين مثلًا أن العصبية تبدأ دائمًا قبل الدورة بأيام معينة، أو أن طاقتك تبلغ ذروتها في الأسبوع الثاني. وعندما تفهمين هذا النمط، شاركي زوجك أو من تعيشين معهم بوضوح: <em>"أنا الآن في أسبوع الخريف الهرموني، وأحتاج دعمك."</em> هذا الوضوح يحول التقلبات من سبب للخلاف إلى لغة مشتركة للتفاهم.</p>
      <p>جسدك ومشاعرك أمانة. فهمك لهذا النظام الإلهي يحول التعب إلى عبادة، والتقلبات إلى فرصة لعمق التواصل مع الله ومع من تحبين.</p>`,
      en: `<p>Allah created the female body with a unique system that changes throughout the month like the four seasons of the year. These emotional and physical shifts are not random, not a flaw, not a deficiency — they are a precise divine design, specifically fitted to carry the sacred trust of creation and nurturing. They are an ongoing journey of giving and renewal, demanding great sacrifice, but carrying within them a profound meaning.</p>
      <p><strong>🌸 Spring — Energy & Giving</strong><br>Estrogen rises after your period, bringing high energy, mental clarity, and a drive to accomplish. A time to thank God through good deeds, and to channel this energy into worship and caring for those around you.</p>
      <p><strong>☀️ Summer — Fertility & Connection</strong><br>Hormones peak around ovulation. You're at your highest levels of communication, generosity, and empathy. A good day to invest in the people you love.</p>
      <p><strong>🍂 Autumn — Withdrawal & Reflection</strong><br>Estrogen falls, progesterone rises. Your body quiets and turns inward. A time for dhikr, and for asking gentleness from God and from yourself.</p>
      <p><strong>❄️ Winter — Renewal & Rest</strong><br>During your period, hormones reach their lowest, and your body needs full rest to rebuild itself. If you don't have the physical or emotional capacity for reading or prayer, it is enough to listen to athkar and the Quran — for listening is worship that settles the heart.</p>
      <p><strong>💡 Understand yourself — then share the journey</strong><br>Track your monthly pattern carefully: your feelings, symptoms, energy levels. You'll discover, for example, that irritability always starts a certain number of days before your period, or that your energy peaks in the second week. Once you understand this pattern, share it clearly with your spouse or those you live with: <em>"I'm in my hormonal autumn week — I need your support."</em> This clarity turns shifts from a source of conflict into a shared language of understanding.</p>
      <p>Your body and emotions are a trust. Understanding this divine system turns exhaustion into worship, and shifts into an opportunity for deeper connection with God and with the people you love.</p>`
    }
  },
  {
    illo: '📔',
    color: '#F5F0FA',
    tag: { ar:'المراهقة والنمو', en:'Adolescence & Growth' },
    title: { ar:'مذكرات مراهقة.. أنا حزينة', en:"A Teenager's Diary... I'm Sad" },
    body: {
      ar: `<p style="font-style:italic;color:#7A5A8A;font-size:13px;margin-bottom:16px;">مذكرات سريّة جداً — إلى الفتاة التي تشعر أن كل شيء ينهار من حولها</p>
      <p>تشعري أن كل شيء ينهار أمامكِ ولا تعودي تعرفي نفسكِ؟ مرحباً بكِ في غرفتكِ، حيث الأفكار تتسارع، والدموع تنزل أحياناً بدون سبب واضح، وحيث تنظري في المرآة وتتساءلي: "من هذه الفتاة؟ ولماذا تغيرت حياتي هكذا فجأة؟" إذا كنتِ تشعري أنكِ تعيشين داخل إعصار، فلستِ وحدكِ. هذه ليست النهاية، بل هي بداية أعظم تحول في حياتكِ.</p>
      <p><strong>من مذكراتي: "أبكي على كل شيء.. ولا أعرف كيف أرفع نفسيتي!"</strong><br>وجدتُ نفسي مستيقظة في منتصف الليل، والدموع تنهمر دون أي سبب واضح. فجأة بدأتُ أستحضر الماضي كله — مواقف قديمة، وكلمات عابرة قيلت لي قبل سنوات. غمرني شعور غريب بأنني وحيدة تماماً في هذا العالم، حتى وأنا وسط عائلتي التي تحبني.</p>
      <p><strong>لماذا الهرمونات تُغير مزاجي وتجعلني أسترجع الأحزان؟</strong><br>الهرمونات ليست مجرد مواد كيميائية لتغيير ملامح الجسد — هي موجات تسونامي تُعيد ترتيب الدماغ. عندما تنخفض الهرمونات فجأة، يسحب هذا الانخفاض كيمياء السعادة من دماغكِ، فيصبح عقلكِ أشبه بمغناطيس يبحث عن أي فكرة حزينة أو موقف قديم ليفسر به سبب هذا الضيق. لكن ثقي تماماً: هذا الإعصار سيمر.</p>
      <p><strong>لماذا أشعر بالوحدة وأنا وسط عائلتي؟</strong><br>لأن عقلكِ ينسلخ الآن عن مرحلة الطفولة ويبحث عن هويتكِ المستقلة. تريدين أن يعاملكِ الناس كشخص واعٍ، وفي نفس الوقت تحنين لأمان الطفولة. هذا التناقض يولّد شعوراً بالفراغ والوحدة — لكن الحقيقة أن كل الفتيات في عمركِ يخضن نفس المعركة الصامتة خلف أبواب غرفهن.</p>
      <p><strong>لماذا أشعر أن الكل أعدائي؟</strong><br>لأن مركز العواطف في دماغكِ ينضج الآن أسرع من مركز العقل والتحليل. يفسّر دماغكِ نصائح والديكِ على أنها هجوم — الأمر ليس لأنهم يكرهونكِ، بل لأن نظارتكِ المشاعرية تُكبّر الأمور وتجعلها حادة.</p>
      <p><strong>كيف قدرت أساعد نفسي خطوة بخطوة؟</strong></p>
      <p>🎧 <strong>تدبّر القرآن في لحظات الانكسار</strong> — كنتُ أضع سماعاتي وأستمع للقرآن والأذكار وأقول لنفسي: "رب الهرمونات والتقلبات هو الذي خلقني، وهو يعلم عمق حزني الآن دون أن أتكلم." سماع الآيات كان يرمم قلبي المكسور.</p>
      <p>📚 <strong>تعلّمي مهارة أو لغة جديدة</strong> — بدلاً من البقاء في السرير وتقليب الهاتف، كنتُ أجبر نفسي على النهوض. فتحتُ تطبيقات لتعلم لغة جديدة، تعلمتُ التصميم والتطريز، وقرأتُ كتب تطوير الذات. التعلم يعيد توجيه مسارات الدماغ بعيداً عن الحزن.</p>
      <p>💛 <strong>التوقف مش فشل</strong> — كنتُ أبدأ في تعلم لغة ولا أكملها، وأبدأ في دورة وأتوقف في منتصفها. في البداية جلدتُ ذاتي، ثم فهمتُ أن هذا عادي جداً! المهم أنني بدأتُ وحاولتُ ولم أستسلم للركود.</p>
      <p style="border-right:3px solid #9A6AAA;padding-right:14px;margin-top:18px;color:#5A3F6A;font-style:italic;">أنتِ لستِ مكسورة، ولستِ سيئة، ولستِ وحدكِ في هذا البكاء المفاجئ. أنتِ تنموين وتزهرين فقط — والنمو أحياناً يكون مؤلماً. كوني رحيمة بنفسكِ، وتذكري أن الله يصنع منكِ الآن امرأة قوية، واعية، وذات أثر.</p>`,
      en: `<p style="font-style:italic;color:#7A5A8A;font-size:13px;margin-bottom:16px;">A very private diary — to the girl who feels like everything is falling apart</p>
      <p>Do you feel like everything is collapsing and you no longer recognize yourself? Welcome to your room — where thoughts race, tears fall sometimes for no clear reason, and you look in the mirror and ask: "Who is this girl? Why has my life suddenly changed like this?" If you feel like you're living inside a storm, you are not alone. This is not the end — it's the beginning of the greatest transformation of your life.</p>
      <p><strong>From my diary: "I cry over everything and I don't know how to lift myself up"</strong><br>I found myself awake in the middle of the night, tears streaming down for no clear reason. Suddenly I started replaying the past — old situations, passing words someone said to me years ago. A strange feeling washed over me that I was completely alone in this world, even surrounded by a family that loves me.</p>
      <p><strong>Why do hormones change my mood and pull up old sadness?</strong><br>Hormones aren't just chemicals that change your body's features — they're tsunamis that reorganize the brain. When hormones drop suddenly, they pull happiness chemistry out of your brain, making your mind act like a magnet searching for any sad thought or old memory to explain the discomfort. But trust this completely: this storm will pass.</p>
      <p><strong>Why do I feel lonely even surrounded by my family?</strong><br>Because your mind is separating from childhood right now and searching for your independent identity. You want people to treat you as a self-aware person, and at the same time you long for the safety of childhood. This contradiction creates a feeling of emptiness and loneliness — but the truth is every girl your age is fighting the same silent battle behind their bedroom door.</p>
      <p><strong>Why do I sometimes feel like everyone is against me?</strong><br>Because the emotional center of your brain is maturing faster than the reasoning center. Your brain interprets your parents' advice as an attack — not because they dislike you, but because your emotional lens right now magnifies everything and makes it feel sharp.</p>
      <p><strong>How I helped myself, one step at a time:</strong></p>
      <p>🎧 <strong>Reflecting on the Quran in moments of brokenness</strong> — I'd put my headphones in and listen to Quran and adhkar, telling myself: "The One who created hormones and shifts knows the depth of my sadness right now without me saying a word." Listening to the verses repaired my broken heart and reminded me I was not alone.</p>
      <p>📚 <strong>Learn a new skill or language</strong> — Instead of staying in bed scrolling (which deepens sadness), I forced myself to get up and direct that intense energy toward learning. Free apps for a new language, design basics, embroidery, self-development books. Learning rewires the brain away from sadness.</p>
      <p>💛 <strong>Stopping is not failure</strong> — I'd start learning a language and not finish it, start a course and stop halfway. At first I blamed myself, then I understood this is completely normal. What matters is that I started, tried, and moved — I didn't surrender to staying still.</p>
      <p style="border-left:3px solid #9A6AAA;padding-left:14px;margin-top:18px;color:#5A3F6A;font-style:italic;">You are not broken, you are not bad, you are not alone in this sudden crying. You are growing and blossoming — and growth is sometimes painful. Be gentle with yourself, and remember that God is making you, right now, into a strong, aware woman who leaves her mark.</p>`
    }
  },
  {
    illo: '🌷',
    color: '#F3E0E8',
    tag: { ar:'الصحة الهرمونية', en:'Hormonal Health' },
    title: { ar:'التكيسات.. معاناة تنتهي بتغيير أسلوب حياتك', en:'PCOS... A Struggle That Ends With Changing Your Lifestyle' },
    body: {
      ar: `<p>تكيّس المبايض (PCOS) من أكثر الاضطرابات الهرمونية شيوعًا بين النساء في سن الإنجاب، ورغم انتشاره الكبير إلا أنه كثيرًا ما يُكتشف متأخرًا، لأن أعراضه تتشابه مع أشياء كثير من النساء "يعتدن عليها" ويظنّنها طبيعية. الخبر المطمئن: هو حالة تُدار، وأعراضها تتحسّن بشكل ملحوظ بمجرد فهمها والتعامل معها بأسلوب حياة مناسب.</p>
      <p><strong>متى تشكّين أنه عندك تكيّس مبايض؟</strong><br>
      🔸 دورة شهرية غير منتظمة أو غائبة لفترات طويلة (أقل من ٨ دورات في السنة، أو تباعد يتجاوز ٣٥ يومًا)<br>
      🔸 صعوبة في نزول الوزن، أو زيادته بسرعة رغم عدم تغيّر نمط الأكل<br>
      🔸 ظهور شعر زائد في مناطق غير معتادة (الذقن، أعلى الشفة) أو تساقط شعر الرأس<br>
      🔸 حب شباب مستمر لا يستجيب للعلاجات المعتادة، خصوصًا حول الفك<br>
      🔸 بقع داكنة بالجلد في الرقبة أو تحت الإبط<br>
      🔸 صعوبة في الحمل رغم المحاولة</p>
      <p>وجود عرض أو اثنين من هذي القائمة لا يعني بالضرورة أن عندك تكيّس مبايض — كثير منها له أسباب أخرى تمامًا. التشخيص الفعلي يحتاج فحص دم لمستويات الهرمونات، وأحيانًا سونار على المبايض، ولازم يكون عن طريق طبيبة نسائية أو غدد صماء. لو لاحظتِ عدة أعراض معًا واستمرت لأكثر من دورة أو دورتين، الخطوة الصح هي حجز موعد فحص، مو محاولة التشخيص الذاتي.</p>
      <p><strong>لو اتشخصتِ فعلًا — نظام الحياة اللي يساعد فعليًا:</strong></p>
      <p>🍽️ <strong>الأكل بطريقة تُحافظ على استقرار الأنسولين</strong> — كثير من حالات تكيّس المبايض مرتبطة بمقاومة الأنسولين. تقليل السكريات السريعة والدقيق الأبيض، والتركيز على البروتين والألياف والدهون الصحية في كل وجبة، يساعد فعليًا على تنظيم الهرمونات مع الوقت.</p>
      <p>🏃‍♀️ <strong>الحركة المنتظمة، مو الحرق الزائد</strong> — تمارين المقاومة (الأوزان) ثلاث مرات أسبوعيًا أثبتت فعالية أكبر من الكارديو المكثف وحده في تحسين حساسية الأنسولين، وبالتالي انتظام الدورة.</p>
      <p>😴 <strong>النوم الكافي والمنتظم</strong> — قلة النوم ترفع هرمونات التوتر وتزيد مقاومة الأنسولين، وهذا يفاقم الأعراض. ٧-٨ ساعات نوم منتظمة تُحدث فرقًا حقيقيًا على المدى المتوسط.</p>
      <p>🧘‍♀️ <strong>تقليل التوتر المزمن</strong> — الكورتيزول المرتفع باستمرار يؤثر مباشرة على توازن الهرمونات التناسلية. أي ممارسة تهدّئ الجهاز العصبي (المشي، التنفس، الذكر) تدعم العلاج، مو رفاهية إضافية.</p>
      <p>💊 <strong>المتابعة الطبية المستمرة</strong> — نظام الحياة يخفف الأعراض ويحسّن جودة الحياة بشكل كبير، لكنه لا يغني عن المتابعة مع الطبيبة، خصوصًا لو فيه رغبة بالحمل مستقبلًا أو أعراض مزعجة تحتاج علاجًا دوائيًا مساندًا.</p>
      <p>تكيّس المبايض مو حكم مؤبد ولا نهاية القصة — هو دعوة لفهم جسمك بعمق أكبر، والتعامل معه بلطف واستمرارية، لا بعقاب أو حرمان.</p>`,
      en: `<p>Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal conditions among women of reproductive age. Despite how common it is, it's often diagnosed late, because its symptoms can look like things many women simply get used to and assume are normal. The reassuring part: it's a manageable condition, and its symptoms genuinely improve once you understand it and adjust your lifestyle around it.</p>
      <p><strong>When should you suspect PCOS?</strong><br>
      🔸 Irregular or frequently missing periods (fewer than 8 cycles a year, or gaps longer than 35 days)<br>
      🔸 Difficulty losing weight, or rapid weight gain, without a change in diet<br>
      🔸 Excess hair growth in unusual places (chin, upper lip) or scalp hair thinning<br>
      🔸 Persistent acne that doesn't respond to usual treatments, especially along the jawline<br>
      🔸 Dark patches of skin on the neck or underarms<br>
      🔸 Difficulty conceiving despite trying</p>
      <p>Having one or two of these on their own doesn't necessarily mean you have PCOS — many of them have entirely different causes. An actual diagnosis needs blood tests for hormone levels, and sometimes an ovarian ultrasound, done through a gynecologist or endocrinologist. If you notice several of these together, persisting over more than a cycle or two, the right next step is booking a check-up — not self-diagnosing.</p>
      <p><strong>If you have been diagnosed — the lifestyle approach that actually helps:</strong></p>
      <p>🍽️ <strong>Eat in a way that keeps insulin stable</strong> — Many PCOS cases are linked to insulin resistance. Cutting back on refined sugar and white flour, and building meals around protein, fiber, and healthy fats genuinely helps regulate hormones over time.</p>
      <p>🏃‍♀️ <strong>Consistent movement, not excessive burning</strong> — Resistance training (weights) three times a week has shown stronger results than cardio alone in improving insulin sensitivity — and, in turn, cycle regularity.</p>
      <p>😴 <strong>Enough, regular sleep</strong> — Sleep deprivation raises stress hormones and worsens insulin resistance, which intensifies symptoms. 7-8 hours of consistent sleep makes a real difference over the medium term.</p>
      <p>🧘‍♀️ <strong>Lowering chronic stress</strong> — Persistently high cortisol directly affects reproductive hormone balance. Anything that calms the nervous system — walking, breathing exercises, dhikr — supports treatment; it isn't a luxury add-on.</p>
      <p>💊 <strong>Ongoing medical follow-up</strong> — Lifestyle changes significantly ease symptoms and improve quality of life, but they don't replace working with your doctor, especially if you're planning for pregnancy or need supportive medication for troubling symptoms.</p>
      <p>PCOS isn't a life sentence or the end of the story — it's an invitation to understand your body more deeply and treat it with consistency and kindness, not punishment or restriction.</p>`
    }
  },
  {
    illo: '🌡️',
    color: '#FCE8D5',
    tag: { ar:'صحة المرأة', en:"Women's Health" },
    title: { ar:'بعبع انقطاع الطمث', en:'The Menopause Bogeyman' },
    body: {
      ar: `<p>هل كنتِ تعلمين أن الهبّات الساخنة لا تصيب فقط النساء في مرحلة ما قبل انقطاع الطمث؟</p>
      <p>هي أيضاً تأتي في أحيان كثيرة جداً للنساء اللاتي وضعن مولوداً للتو، وربما تستمر معهن طوال فترة الرضاعة الطبيعية. الأمر هنا يتعلق بالهرمونات تعلقاً كبيراً؛ وتحديداً بسبب انسحاب هرمون من جسمكِ يدعى البروجسترون، وانخفاض الإستروجين المفاجئ بعد الولادة، وهو ما يُربك مركز تنظيم الحرارة في دماغكِ.</p>
      <p>لكن هناك أعراضٌ ثانية تماماً قد تصيبكِ في الأربعينيات وتحسبينها مرضاً مزمناً، بينما هي في الحقيقة مجرد أعراض طبيعية لمرحلة "ما قبل انقطاع الطمث".</p>
      <p><strong>أولاً: خلينا نتعرف على هذه المرحلة وكم تستمر؟</strong><br>في تعريفها المبسط: هي الفاصل الانتقالي الذي يسبق توقف الدورة الشهرية نهائياً، حيث تضطرب فيه الهرمونات صعوداً وهبوطاً بشكل عشوائي. تبدأ غالباً في منتصف الأربعينيات، لكن المدى الطبيعي يمتد من منتصف الثلاثينيات إلى أوائل الخمسينيات، وتستمر في المتوسط نحو 4 إلى 7 سنوات، وتختلف من امرأة لأخرى.</p>
      <p><strong>أما عن الأعراض فعندكِ مجموعتان؛ الأولى الأعراض الشائعة والشهيرة جداً:</strong><br>
      🔸 <strong>تغيّر نمط الدورة:</strong> تتباعد الفترات أو تقترب، ويصبح النزف غزيراً جداً أو خفيفاً.<br>
      🔸 <strong>الهبّات الساخنة:</strong> نوبات مفاجئة من الحرارة والتعرق تهاجم الوجه والصدر.<br>
      🔸 <strong>اضطراب النوم والأرق:</strong> الاستيقاظ المتكرر، خاصة في ساعات الفجر الأولى.<br>
      🔸 <strong>تقلبات المزاج والعصبية:</strong> سرعة الغضب والتهيّج بدون أسباب واضحة.<br>
      🔸 <strong>الإرهاق المستمر:</strong> شعور بالاستنزاف الجسدي والذهني حتى دون بذل مجهود كبير.<br>
      🔸 <strong>الضباب الدماغي:</strong> نسيان الأسماء والكلمات وصعوبة التركيز المؤقتة.<br>
      🔸 <strong>جفاف المنطقة الحساسة:</strong> يتسبب في ألم أثناء العلاقة الزوجية أو حرقة مستمرة.</p>
      <p><strong>أما الأعراض النادرة فممكن تلاقي:</strong><br>
      🔸 <strong>طنين الأذن:</strong> أزيز أو رنين يظهر في الأذن فجأة أو يشتد.<br>
      🔸 <strong>متلازمة الفم الحارق:</strong> إحساس بلسعة أو حرقة في اللسان واللثة.<br>
      🔸 <strong>الشحنات الكهربائية:</strong> شعور بومضة كهربائية سريعة في الرأس قبل الهبّة الساخنة.<br>
      🔸 <strong>وخز الجلد:</strong> إحساس غريب يشبه زحف الحشرات تحت البشرة.<br>
      🔸 <strong>آلام وتيبّس المفاصل:</strong> خاصة عند الاستيقاظ صباحاً في الركبتين أو اليدين.<br>
      🔸 <strong>الدوار واختلال التوازن:</strong> صعوبة بسيطة في تقدير المسافات أو الاصطدام بحواف الأثاث.<br>
      🔸 <strong>التهابات المسالك البولية المتكررة:</strong> والحاجة الملحّة للتبول بشكل متكرر.</p>
      <p>قبل ما نتكلم عن الخطوات العملية أو الطبية، خليني أقلكِ شي مهم: إن تقبّل هذه المرحلة نفسياً وجعلها محطة إيجابية في عقلكِ يجعل التعايش معها غير مقلق أبداً، بل ويساعد أعراضها الجسدية على أن تخفّ وتتراجع. اعرفي أن هذا سن الأمان والسكون، السن الذي لن تتمكن منكِ الهرمونات بعده ولن تتحكم بمزاجكِ أبداً، إنها مرحلة السكون الفكري والرواق النفسي. اعملي على استغلال سنوات الانتقال؛ إذا كنتِ الآن في سنوات ما قبل الطمث، استغليها جيداً بأن تشغلي عقلكِ ونفسكِ، وتنجزي كل ما هو متاح أمامكِ. وصدقيني، أكثر شيء مهم في هذه المرحلة التقرب إلى الله؛ قوّي علاقتكِ بالله أكثر، واجبري خاطركِ بالعبادة، واحفظي ما تيسر من القرآن الكريم، فهو كفيل بأن يحفظ روحكِ وينير بصيرتكِ، فضلاً عن أنه ينشط ذاكرتكِ ويحميها من النسيان. تعلمي لغة جديدة، أو اكتسبي مهارة يدوية أو رقمية، وركّزي على إنماء مواهب قديمة كنتِ قد أجّلتِها، واصنعي لنفسكِ علاقات وصداقات جديدة إيجابية. لا تزالين في كامل طاقتكِ ونضجكِ؛ فلا تستسلمي لأعراض تذهب وتأتي. القاعدة الذهبية هنا: ارتاحي تماماً حين تأتي الأعراض وتهاجمكِ، وانطلقي بكل شغف وحيوية حين تختفي!</p>
      <p>أما بالنسبة للأفكار اللي ممكن تساعدكِ جسدياً وبرضة نفسياً، فاهتمي بالتغذية والرياضة. ركّزي على الأطعمة الغنية بالكالسيوم والماغنسيوم لحماية العظام، ومارسي المشي بانتظام لتعديل المزاج والنوم. خففي المحفزات؛ قللي من الكافيين والقهوة ليلاً لأنها تزيد من حرارة الجسم وتخرّب النوم. وأخيراً لازم تستشيري طبيبة؛ لو كانت الأعراض تؤثر على جودة حياتكِ اليومية، استشيري طبيبتكِ المختصة لبحث الحلول، سواء كنتِ بحاجة إلى مكملات هرمونية بديلة تعيد التوازن لجسمكِ، أو حلولٍ حديثة وغير هرمونية تناسب تاريخكِ الصحي.</p>
      <p style="font-size:11.5px;color:#9b8a92;margin-top:18px;">تنويه طبي: هذا المقال مخصص للتوعية العامة فقط، ولا يُعتبر بديلاً عن الاستشارة الطبية المباشرة لتشخيص حالتكِ وتحديد العلاج الأنسب لكِ.</p>`,
      en: `<p>Did you know that hot flashes don't only affect women in perimenopause?</p>
      <p>They also come, very often, to women who have just given birth — and they may stay with you throughout the whole breastfeeding period. This has everything to do with hormones: specifically the withdrawal of a hormone called progesterone from your body, and the sudden drop in estrogen after delivery, which throws off the temperature-regulating center in your brain.</p>
      <p>But there is a completely different set of symptoms that can hit you in your forties, and you may mistake them for a chronic illness — when in reality they are simply the natural symptoms of the "perimenopause" stage.</p>
      <p><strong>First: what is this stage, and how long does it last?</strong><br>In simple terms, it is the transitional interval that precedes the permanent stopping of your period, during which hormones fluctuate up and down erratically. It usually begins in the mid-forties, but the normal range stretches from the mid-thirties to the early fifties. On average it lasts around 4 to 7 years, and it differs from one woman to another.</p>
      <p><strong>As for symptoms, you have two groups. The first is the common, well-known ones:</strong><br>
      🔸 <strong>Changes in your cycle pattern:</strong> the gaps between periods stretch out or shorten, and the bleeding becomes very heavy or very light.<br>
      🔸 <strong>Hot flashes:</strong> sudden waves of heat and sweating that attack the face and chest.<br>
      🔸 <strong>Disrupted sleep and insomnia:</strong> repeated waking, especially in the early pre-dawn hours.<br>
      🔸 <strong>Mood swings and irritability:</strong> quick anger and agitation for no clear reason.<br>
      🔸 <strong>Constant exhaustion:</strong> a feeling of physical and mental depletion even without much effort.<br>
      🔸 <strong>Brain fog:</strong> forgetting names and words, and temporary difficulty concentrating.<br>
      🔸 <strong>Vaginal dryness:</strong> which causes pain during intimacy or a persistent burning sensation.</p>
      <p><strong>And among the rarer symptoms, you may come across:</strong><br>
      🔸 <strong>Tinnitus:</strong> a buzzing or ringing that appears in the ear suddenly, or intensifies.<br>
      🔸 <strong>Burning mouth syndrome:</strong> a stinging or burning sensation on the tongue and gums.<br>
      🔸 <strong>Electric shocks:</strong> a feeling of a quick electrical flash in the head just before a hot flash.<br>
      🔸 <strong>Skin tingling:</strong> a strange sensation resembling insects crawling beneath the skin.<br>
      🔸 <strong>Joint pain and stiffness:</strong> especially on waking in the morning, in the knees or hands.<br>
      🔸 <strong>Dizziness and loss of balance:</strong> slight difficulty judging distances, or bumping into the edges of furniture.<br>
      🔸 <strong>Recurrent urinary tract infections:</strong> along with a frequent, urgent need to urinate.</p>
      <p>Before we talk about the practical or medical steps, let me tell you something important. Accepting this stage psychologically, and making it a positive milestone in your mind, makes living with it entirely un-frightening — and it even helps the physical symptoms ease and recede. Know that this is the age of safety and stillness: the age after which hormones can no longer get the better of you or control your mood. It is a stage of intellectual calm and inner ease. Work on making use of these transitional years. If you are in the years before menopause right now, use them well: occupy your mind and your soul, and accomplish everything within your reach. And believe me, the most important thing in this stage is drawing closer to God. Strengthen your relationship with Him, comfort your heart through worship, and memorize what you can of the Qur'an — it will safeguard your spirit and illuminate your insight, and it also keeps your memory active and protects it from forgetfulness. Learn a new language, or pick up a manual or digital skill. Focus on growing old talents you once set aside, and build yourself new, positive friendships and connections. You are still in the fullness of your energy and maturity — so don't surrender to symptoms that come and go. The golden rule here: rest completely when the symptoms arrive and attack, and set off with all your passion and vitality when they disappear!</p>
      <p>As for what can help you physically — and psychologically too — pay attention to nutrition and exercise. Focus on foods rich in calcium and magnesium to protect your bones, and walk regularly to steady your mood and your sleep. Cut down on triggers: reduce caffeine and coffee at night, since they raise your body temperature and ruin your sleep. And finally, you do need to see a doctor: if the symptoms are affecting the quality of your daily life, consult your specialist to explore the options — whether you need hormone replacement supplements to restore your body's balance, or newer non-hormonal solutions that suit your medical history.</p>
      <p style="font-size:11.5px;color:#9b8a92;margin-top:18px;">Medical disclaimer: This article is intended for general awareness only and is not a substitute for direct medical consultation to diagnose your condition and determine the treatment most suitable for you.</p>`
    }
  },
  {
    illo: '📅',
    color: '#F4ECE3',
    tag: { ar:'أسباب تأخر الدورة', en:'Reasons for a Late Period' },
    lateSuggest: true,
    title: { ar:'التوتر وتغيّر نمط حياتك — هل هو سبب تأخر دورتك؟', en:'Stress & Lifestyle Changes — Could They Be Delaying Your Period?' },
    body: {
      ar: `<p>من أكثر الأسباب شيوعًا لتأخر الدورة، وأكثرها إهمالًا، هو التوتر النفسي والتغيّرات في نمط حياتك اليومي. جسمك لا يفصل بين "الضغط النفسي" و"الخطر الفعلي" — فحين يرتفع هرمون الكورتيزول (هرمون التوتر) لفترة طويلة، فإنه يُربك المحور الهرموني المسؤول عن التبويض (المعروف بمحور الوطاء - الغدة النخامية - المبيض)، فيتأخر التبويض أو يتوقف مؤقتًا، ويتأخر معه نزول الدورة.</p>
      <p><strong>أشياء غير التوتر النفسي المباشر ممكن تسبب نفس الأثر:</strong></p>
      <p>✈️ <strong>السفر وتغيّر التوقيت</strong> — يربك الساعة البيولوجية لجسمك، وتحتاجين وقتًا لتعتاد عليه.</p>
      <p>😴 <strong>قلة النوم أو اضطراب مواعيده</strong> — النوم غير المنتظم يؤثر على الهرمونات المسؤولة عن التبويض.</p>
      <p>🏋️‍♀️ <strong>زيادة مفاجئة في شدة الرياضة</strong> — التمارين المكثفة جدًا وبشكل مفاجئ قد تُخبر جسمك أنه في "وضع نجاة" فيؤجّل التبويض.</p>
      <p>⚖️ <strong>تغيّر سريع في الوزن</strong> — سواء بالزيادة أو النقصان الملحوظ خلال فترة قصيرة.</p>
      <p><strong>ماذا تفعلين؟</strong><br>لو لاحظتِ أن التأخر جاء بعد فترة ضاغطة أو تغيير كبير في روتينك، أعطي جسمك وقتًا (دورة أو دورتين) قبل القلق. حاولي تقليل مصادر التوتر قدر الإمكان، ونظّمي نومك، وإذا مارستِ رياضة مكثفة جديدة، أدخليها تدريجيًا. لو استمر التأخر لأكثر من دورتين متتاليتين رغم ذلك، من الأفضل استشارة طبيبة.</p>
      <p style="font-size:11.5px;color:#9b8a92;margin-top:18px;">تنويه طبي: هذا المقال مخصص للتوعية العامة فقط، ولا يُعتبر بديلاً عن الاستشارة الطبية المباشرة.</p>`,
      en: `<p>One of the most common — and most overlooked — reasons for a late period is psychological stress and changes in your daily routine. Your body doesn't distinguish between "emotional pressure" and "actual danger": when cortisol (the stress hormone) stays elevated for a while, it disrupts the hormonal axis responsible for ovulation (the hypothalamus-pituitary-ovary axis), so ovulation is delayed or temporarily paused — and your period is delayed along with it.</p>
      <p><strong>Other things besides direct psychological stress can cause the same effect:</strong></p>
      <p>✈️ <strong>Travel and time-zone changes</strong> — these disrupt your body's internal clock, and it takes time to adjust.</p>
      <p>😴 <strong>Lack of sleep or an irregular sleep schedule</strong> — disrupted sleep affects the hormones responsible for ovulation.</p>
      <p>🏋️‍♀️ <strong>A sudden increase in exercise intensity</strong> — very intense, sudden exercise can signal to your body that it's in "survival mode," delaying ovulation.</p>
      <p>⚖️ <strong>Rapid weight change</strong> — whether a noticeable gain or loss over a short period.</p>
      <p><strong>What should you do?</strong><br>If you notice the delay came after a stressful stretch or a big change in your routine, give your body some time (a cycle or two) before worrying. Try to reduce stress where you can, keep a regular sleep schedule, and if you've started intense new exercise, ease into it gradually. If the delay continues for more than two consecutive cycles regardless, it's best to consult a doctor.</p>
      <p style="font-size:11.5px;color:#9b8a92;margin-top:18px;">Medical disclaimer: This article is intended for general awareness only and is not a substitute for direct medical consultation.</p>`
    }
  },
  {
    illo: '🦋',
    color: '#FEF0F6',
    tag: { ar:'أسباب تأخر الدورة', en:'Reasons for a Late Period' },
    lateSuggest: true,
    title: { ar:'اضطراب الهرمونات وتكيّس المبايض والغدة الدرقية', en:'Hormonal Imbalance, PCOS & Thyroid Issues' },
    body: {
      ar: `<p>لو تأخر الدورة يتكرر عندك بشكل متكرر وليس مرة واحدة عابرة، من المهم التفكير في أسباب هرمونية أعمق، وأشهرها اثنان:</p>
      <p><strong>🌸 متلازمة تكيّس المبايض (PCOS)</strong><br>من أكثر أسباب عدم انتظام الدورة شيوعًا بين النساء في سن الإنجاب. تتسبب في اختلال التوازن بين الهرمونات المسؤولة عن التبويض، مما يجعل التبويض غير منتظم أو لا يحدث كل شهر، وبالتالي تتأخر الدورة أو تنقطع لأشهر أحيانًا. غالبًا ما تُرافقها أعراض أخرى مثل زيادة نمو الشعر في الوجه أو الجسم، حب الشباب، أو صعوبة في إنقاص الوزن.</p>
      <p><strong>🦋 اضطرابات الغدة الدرقية</strong><br>الغدة الدرقية تنظّم عمليات الأيض في الجسم بالكامل، وأي خلل فيها — سواء كسل الغدة (قصور) أو فرط نشاطها — ينعكس مباشرة على انتظام الدورة الشهرية. قصور الغدة الدرقية غالبًا ما يترافق مع تعب عام، زيادة في الوزن، وحساسية للبرد؛ بينما فرط نشاطها يترافق مع خفقان القلب، فقدان وزن غير مبرر، وعصبية زائدة.</p>
      <p><strong>متى تستشيرين طبيبة؟</strong><br>لو لاحظتِ تأخرًا متكررًا (مو مرة واحدة) مصحوبًا بأي من الأعراض المذكورة أعلاه، فحص هرموني بسيط عند الطبيبة (يشمل عادة هرمونات الغدة الدرقية وهرمونات التبويض) يقدر يوضح الصورة ويحدد إذا كنتِ بحاجة لعلاج أو متابعة فقط.</p>
      <p style="font-size:11.5px;color:#9b8a92;margin-top:18px;">تنويه طبي: هذا المقال مخصص للتوعية العامة فقط، ولا يُعتبر بديلاً عن الاستشارة الطبية المباشرة أو التشخيص.</p>`,
      en: `<p>If a late period is a recurring pattern for you rather than a one-off, it's worth considering deeper hormonal causes — the two most common are:</p>
      <p><strong>🌸 Polycystic Ovary Syndrome (PCOS)</strong><br>One of the most common causes of irregular periods in women of reproductive age. It causes an imbalance in the hormones responsible for ovulation, making ovulation irregular or making it skip some months entirely — so your period is delayed, or sometimes absent for months. It's often accompanied by other signs like increased facial or body hair growth, acne, or difficulty losing weight.</p>
      <p><strong>🦋 Thyroid disorders</strong><br>Your thyroid regulates your body's entire metabolism, and any imbalance in it — whether an underactive thyroid (hypothyroidism) or an overactive one (hyperthyroidism) — directly affects the regularity of your period. An underactive thyroid often comes with general fatigue, weight gain, and cold sensitivity, while an overactive one comes with heart palpitations, unexplained weight loss, and excess irritability.</p>
      <p><strong>When should you see a doctor?</strong><br>If you notice a recurring delay (not just once) along with any of the symptoms mentioned above, a simple hormone panel with your doctor (usually including thyroid hormones and ovulation-related hormones) can clarify the picture and determine whether you need treatment or just monitoring.</p>
      <p style="font-size:11.5px;color:#9b8a92;margin-top:18px;">Medical disclaimer: This article is intended for general awareness only and is not a substitute for direct medical consultation or diagnosis.</p>`
    }
  },
  {
    illo: '🤍',
    color: '#F0F8F0',
    tag: { ar:'أسباب تأخر الدورة', en:'Reasons for a Late Period' },
    lateSuggest: true,
    title: { ar:'احتمال الحمل، ومتى يكون التأخر مدعاة لزيارة الطبيبة', en:'The Possibility of Pregnancy — and When a Delay Needs a Doctor' },
    body: {
      ar: `<p>أول احتمال يجب استبعاده عند تأخر الدورة، إذا كنتِ متزوجة أو في علاقة نشطة، هو الحمل — وهذا أشيع سبب لتأخر الدورة على الإطلاق عند النساء في هذه الفئة. اختبار حمل منزلي بسيط (يُفضّل بعد مرور أسبوع على الأقل من التأخر لدقة أعلى) يعطيكِ إجابة سريعة وواضحة، وإذا كانت النتيجة إيجابية، يُنصح بمراجعة طبيبة لتأكيد الحمل ومتابعته.</p>
      <p><strong>ومتى يكون التأخر — بعد استبعاد الحمل — مدعاة فعلية لزيارة الطبيبة؟</strong></p>
      <p>🔸 تأخرت دورتك أكثر من 3 أشهر متتالية دون سبب واضح (تغيّر نمط حياة، سفر، رياضة مكثفة...).</p>
      <p>🔸 التأخر مصحوب بألم شديد غير معتاد، أو نزيف غير منتظم بين الدورات.</p>
      <p>🔸 التأخر مصحوب بأعراض أخرى ملحوظة مثل زيادة شعر الجسم، حب شباب مفاجئ، أو تغيّر ملحوظ وغير مبرر في الوزن.</p>
      <p>🔸 توقفت الدورة تمامًا لأكثر من 90 يومًا وأنتِ لست في سن اليأس ولا حاملًا.</p>
      <p>بشكل عام، دورة متأخرة مرة واحدة نادرًا ما تكون مقلقة — لكن تكرار التأخر أو ترافقه مع أعراض أخرى هو ما يستحق فحصًا طبيًا، ليس للقلق، بل لفهم جسمك بشكل أفضل والاطمئنان.</p>
      <p style="font-size:11.5px;color:#9b8a92;margin-top:18px;">تنويه طبي: هذا المقال مخصص للتوعية العامة فقط، ولا يُعتبر بديلاً عن الاستشارة الطبية المباشرة أو التشخيص.</p>`,
      en: `<p>If you're married or in a sexually active relationship, the first possibility to rule out when your period is late is pregnancy — it's by far the most common cause of a late period for women in this group. A simple home pregnancy test (ideally taken at least a week after the missed date for better accuracy) gives you a quick, clear answer, and if it's positive, it's best to see a doctor to confirm and follow up on the pregnancy.</p>
      <p><strong>Once pregnancy is ruled out, when does a delay actually call for a doctor's visit?</strong></p>
      <p>🔸 Your period has been delayed for more than 3 consecutive months with no clear cause (routine change, travel, intense exercise...).</p>
      <p>🔸 The delay comes with unusually severe pain, or irregular bleeding between periods.</p>
      <p>🔸 The delay comes with other noticeable signs, like increased body hair, sudden acne, or an unexplained, noticeable weight change.</p>
      <p>🔸 Your period has stopped entirely for more than 90 days and you're not near menopause and not pregnant.</p>
      <p>Generally speaking, a single late period is rarely worrying — but a recurring delay, or one paired with other symptoms, is what deserves a medical check. Not to worry, but to understand your body better and put your mind at ease.</p>
      <p style="font-size:11.5px;color:#9b8a92;margin-top:18px;">Medical disclaimer: This article is intended for general awareness only and is not a substitute for direct medical consultation or diagnosis.</p>`
    }
  },
];

// SVG cover art definitions per article
const ARTICLE_COVERS = [
  // 0: Bloating — water/bubbles on teal-sage gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg0" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#B5D5D0"/><stop offset="100%" stop-color="#7BAAA6"/></linearGradient></defs>
    <rect width="148" height="110" fill="url(#cg0)"/>
    <circle cx="40" cy="70" r="28" fill="rgba(255,255,255,.12)"/>
    <circle cx="110" cy="40" r="22" fill="rgba(255,255,255,.10)"/>
    <circle cx="74" cy="85" r="14" fill="rgba(255,255,255,.15)"/>
    <circle cx="120" cy="88" r="9" fill="rgba(255,255,255,.10)"/>
    <circle cx="25" cy="30" r="10" fill="rgba(255,255,255,.13)"/>
    <circle cx="60" cy="28" r="6" fill="rgba(255,255,255,.18)"/>
    <circle cx="90" cy="60" r="4" fill="rgba(255,255,255,.20)"/>
    <line x1="30" y1="55" x2="120" y2="55" stroke="rgba(255,255,255,.18)" stroke-width="1" stroke-dasharray="4 6"/>
  </svg>`,
  // 1: Relationships — interlocking circles on warm rose gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#C97B84"/><stop offset="100%" stop-color="#E8A0A8"/></linearGradient></defs>
    <rect width="148" height="110" fill="url(#cg2)"/>
    <circle cx="62" cy="52" r="28" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <circle cx="88" cy="52" r="28" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <ellipse cx="75" cy="52" rx="10" ry="22" fill="rgba(255,255,255,.22)"/>
    <path d="M74 30 Q78 22 82 30" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <path d="M74 74 Q78 82 82 74" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <circle cx="30" cy="20" r="4" fill="rgba(255,255,255,.2)"/>
    <circle cx="118" cy="88" r="5" fill="rgba(255,255,255,.18)"/>
  </svg>`,
  // 3: Know yourself — mirror/reflection on soft gold gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#D4A96A"/><stop offset="100%" stop-color="#8A9B7E"/></linearGradient></defs>
    <rect width="148" height="110" fill="url(#cg3)"/>
    <ellipse cx="74" cy="48" rx="26" ry="32" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2"/>
    <ellipse cx="74" cy="48" rx="18" ry="24" fill="rgba(255,255,255,.18)"/>
    <rect x="68" y="78" width="12" height="16" rx="3" fill="rgba(255,255,255,.35)"/>
    <rect x="56" y="93" width="36" height="5" rx="2.5" fill="rgba(255,255,255,.35)"/>
    <line x1="40" y1="15" x2="60" y2="22" stroke="rgba(255,255,255,.3)" stroke-width="1"/>
    <line x1="108" y1="15" x2="90" y2="22" stroke="rgba(255,255,255,.3)" stroke-width="1"/>
    <circle cx="30" cy="75" r="6" fill="rgba(255,255,255,.15)"/>
    <circle cx="118" cy="30" r="5" fill="rgba(255,255,255,.15)"/>
  </svg>`,
  // 4: Love craving — heart waves on deep terracotta gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#B5573F"/><stop offset="100%" stop-color="#D4876A"/></linearGradient></defs>
    <rect width="148" height="110" fill="url(#cg4)"/>
    <path d="M74 72 C74 72 42 54 42 38 C42 28 52 22 62 30 C66 33 70 37 74 42 C78 37 82 33 86 30 C96 22 106 28 106 38 C106 54 74 72 74 72Z" fill="rgba(255,255,255,.28)" stroke="rgba(255,255,255,.5)" stroke-width="1"/>
    <path d="M20 60 Q37 52 54 60 Q71 68 88 60 Q105 52 122 60" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="1.5"/>
    <path d="M20 75 Q37 67 54 75 Q71 83 88 75 Q105 67 122 75" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="1.5"/>
    <circle cx="25" cy="25" r="4" fill="rgba(255,255,255,.2)"/>
    <circle cx="125" cy="90" r="5" fill="rgba(255,255,255,.18)"/>
    <circle cx="118" cy="20" r="2.5" fill="rgba(255,255,255,.25)"/>
  </svg>`,
  // 5: Divine hormonal journey — crescent + rays on deep teal-blue gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cg5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1A3A5C"/><stop offset="100%" stop-color="#2D6E7A"/></linearGradient>
    </defs>
    <rect width="148" height="110" fill="url(#cg5)"/>
    <!-- soft radial glow -->
    <circle cx="74" cy="50" r="38" fill="rgba(255,255,255,.05)"/>
    <!-- crescent moon -->
    <circle cx="74" cy="46" r="22" fill="rgba(255,255,255,.28)"/>
    <circle cx="84" cy="40" r="18" fill="url(#cg5)"/>
    <!-- light rays -->
    <line x1="74" y1="8" x2="74" y2="18" stroke="rgba(255,255,255,.35)" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="104" y1="18" x2="97" y2="25" stroke="rgba(255,255,255,.28)" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="114" y1="46" x2="104" y2="46" stroke="rgba(255,255,255,.28)" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="44" y1="18" x2="51" y2="25" stroke="rgba(255,255,255,.28)" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="34" y1="46" x2="44" y2="46" stroke="rgba(255,255,255,.28)" stroke-width="1.5" stroke-linecap="round"/>
    <!-- dots / stars -->
    <circle cx="30" cy="22" r="1.5" fill="rgba(255,255,255,.5)"/>
    <circle cx="118" cy="28" r="1.2" fill="rgba(255,255,255,.45)"/>
    <circle cx="55" cy="14" r="1" fill="rgba(255,255,255,.4)"/>
    <circle cx="100" cy="10" r="1.3" fill="rgba(255,255,255,.42)"/>
    <!-- bottom wave -->
    <path d="M14 80 Q37 70 60 80 Q83 90 106 80 Q125 72 140 78" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1.5"/>
    <path d="M14 92 Q37 82 60 92 Q83 102 106 92 Q125 84 140 90" fill="none" stroke="rgba(255,255,255,.10)" stroke-width="1.5"/>
  </svg>`,
  // 5: Teenage diary — notebook, heart doodle, stars, soft purple night
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cg6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4A3060"/><stop offset="100%" stop-color="#9A6AAA"/></linearGradient>
    </defs>
    <rect width="148" height="110" fill="url(#cg6)"/>
    <rect x="36" y="22" width="58" height="72" rx="4" fill="rgba(255,255,255,.22)" stroke="rgba(255,255,255,.4)" stroke-width="1.2"/>
    <rect x="36" y="22" width="8" height="72" rx="3" fill="rgba(255,255,255,.12)"/>
    <line x1="50" y1="40" x2="86" y2="40" stroke="rgba(255,255,255,.25)" stroke-width="1"/>
    <line x1="50" y1="50" x2="86" y2="50" stroke="rgba(255,255,255,.25)" stroke-width="1"/>
    <line x1="50" y1="60" x2="86" y2="60" stroke="rgba(255,255,255,.25)" stroke-width="1"/>
    <line x1="50" y1="70" x2="86" y2="70" stroke="rgba(255,255,255,.25)" stroke-width="1"/>
    <line x1="50" y1="80" x2="76" y2="80" stroke="rgba(255,255,255,.20)" stroke-width="1"/>
    <path d="M72 33 C72 33 65 28 65 34 C65 37 68 40 72 44 C76 40 79 37 79 34 C79 28 72 33 72 33Z" fill="rgba(255,255,255,.45)"/>
    <circle cx="108" cy="30" r="2" fill="rgba(255,255,255,.5)"/>
    <circle cx="118" cy="50" r="1.5" fill="rgba(255,255,255,.4)"/>
    <circle cx="112" cy="68" r="1.2" fill="rgba(255,255,255,.35)"/>
    <circle cx="24" cy="45" r="1.5" fill="rgba(255,255,255,.35)"/>
    <circle cx="18" cy="70" r="1" fill="rgba(255,255,255,.3)"/>
    <circle cx="122" cy="20" r="8" fill="rgba(255,255,255,.2)"/>
    <circle cx="126" cy="17" r="6" fill="url(#cg6)"/>
  </svg>`,
  // 6: PCOS — flower/renewal motif on dusty rose-plum gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#C97B94"/><stop offset="100%" stop-color="#7A4A62"/></linearGradient></defs>
    <rect width="148" height="110" fill="url(#cg7)"/>
    <circle cx="74" cy="52" r="10" fill="rgba(255,255,255,.35)"/>
    <ellipse cx="74" cy="34" rx="9" ry="15" fill="rgba(255,255,255,.22)"/>
    <ellipse cx="74" cy="70" rx="9" ry="15" fill="rgba(255,255,255,.22)"/>
    <ellipse cx="56" cy="52" rx="15" ry="9" fill="rgba(255,255,255,.22)"/>
    <ellipse cx="92" cy="52" rx="15" ry="9" fill="rgba(255,255,255,.22)"/>
    <ellipse cx="61" cy="39" rx="10" ry="9" fill="rgba(255,255,255,.18)" transform="rotate(-45 61 39)"/>
    <ellipse cx="87" cy="39" rx="10" ry="9" fill="rgba(255,255,255,.18)" transform="rotate(45 87 39)"/>
    <ellipse cx="61" cy="65" rx="10" ry="9" fill="rgba(255,255,255,.18)" transform="rotate(45 61 65)"/>
    <ellipse cx="87" cy="65" rx="10" ry="9" fill="rgba(255,255,255,.18)" transform="rotate(-45 87 65)"/>
    <circle cx="24" cy="22" r="4" fill="rgba(255,255,255,.2)"/>
    <circle cx="122" cy="90" r="5" fill="rgba(255,255,255,.18)"/>
    <circle cx="118" cy="20" r="2.5" fill="rgba(255,255,255,.25)"/>
  </svg>`,
  // 7: Perimenopause — heat-wave motif on amber-copper gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#D98C3F"/><stop offset="100%" stop-color="#B5573F"/></linearGradient></defs>
    <rect width="148" height="110" fill="url(#cg8)"/>
    <path d="M50 15 Q62 40 50 55 Q38 70 50 95" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="3" stroke-linecap="round"/>
    <path d="M74 12 Q86 38 74 54 Q62 70 74 98" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="3" stroke-linecap="round"/>
    <path d="M98 15 Q110 40 98 55 Q86 70 98 95" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="24" cy="20" r="4" fill="rgba(255,255,255,.2)"/>
    <circle cx="128" cy="95" r="5" fill="rgba(255,255,255,.18)"/>
  </svg>`,
  // 8: Late period (stress) — calendar motif on warm sand gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#C8956D"/><stop offset="100%" stop-color="#8A6A4A"/></linearGradient></defs>
    <rect width="148" height="110" fill="url(#cg9)"/>
    <rect x="40" y="28" width="68" height="60" rx="6" fill="rgba(255,255,255,.2)"/>
    <rect x="40" y="28" width="68" height="16" rx="6" fill="rgba(255,255,255,.32)"/>
    <line x1="54" y1="22" x2="54" y2="34" stroke="rgba(255,255,255,.5)" stroke-width="3" stroke-linecap="round"/>
    <line x1="94" y1="22" x2="94" y2="34" stroke="rgba(255,255,255,.5)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="94" cy="70" r="9" fill="rgba(181,87,63,.55)" stroke="rgba(255,255,255,.6)" stroke-width="1.5"/>
    <circle cx="52" cy="58" r="2" fill="rgba(255,255,255,.4)"/>
    <circle cx="66" cy="58" r="2" fill="rgba(255,255,255,.4)"/>
    <circle cx="80" cy="58" r="2" fill="rgba(255,255,255,.4)"/>
    <circle cx="52" cy="72" r="2" fill="rgba(255,255,255,.4)"/>
    <circle cx="66" cy="72" r="2" fill="rgba(255,255,255,.4)"/>
  </svg>`,
  // 9: Late period (hormonal/thyroid) — butterfly motif on rose-plum gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#C97B94"/><stop offset="100%" stop-color="#5A3F52"/></linearGradient></defs>
    <rect width="148" height="110" fill="url(#cg10)"/>
    <ellipse cx="60" cy="46" rx="16" ry="11" fill="rgba(255,255,255,.28)" transform="rotate(-18 60 46)"/>
    <ellipse cx="88" cy="46" rx="16" ry="11" fill="rgba(255,255,255,.28)" transform="rotate(18 88 46)"/>
    <ellipse cx="63" cy="66" rx="11" ry="8" fill="rgba(255,255,255,.2)" transform="rotate(-12 63 66)"/>
    <ellipse cx="85" cy="66" rx="11" ry="8" fill="rgba(255,255,255,.2)" transform="rotate(12 85 66)"/>
    <rect x="72" y="36" width="4" height="42" rx="2" fill="rgba(255,255,255,.5)"/>
    <circle cx="24" cy="24" r="3" fill="rgba(255,255,255,.25)"/>
    <circle cx="126" cy="88" r="4" fill="rgba(255,255,255,.2)"/>
  </svg>`,
  // 10: Late period (pregnancy possibility / doctor) — heart & checkmark on sage-cream gradient
  `<svg viewBox="0 0 148 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cg11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#8A9B7E" /><stop offset="100%" stop-color="#5A6E52"/></linearGradient></defs>
    <rect width="148" height="110" fill="url(#cg11)"/>
    <path d="M74 70 C74 70 48 54 48 36 C48 25 62 20 74 32 C86 20 100 25 100 36 C100 54 74 70 74 70Z" fill="rgba(255,255,255,.28)"/>
    <circle cx="108" cy="30" r="14" fill="rgba(255,255,255,.18)"/>
    <path d="M101 30 L106 35 L116 24" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="26" cy="82" r="3" fill="rgba(255,255,255,.25)"/>
    <circle cx="118" cy="86" r="4" fill="rgba(255,255,255,.2)"/>
  </svg>`,
];

// gradient per article for the title text
const ARTICLE_TITLE_GRADS = [
  'linear-gradient(135deg,#5A9A94,#2E7A74)',
  'linear-gradient(135deg,#9A4A54,#C97B84)',
  'linear-gradient(135deg,#8A7340,#5A8A52)',
  'linear-gradient(135deg,#8A3A24,#C97B60)',
  'linear-gradient(135deg,#1A3A5C,#2D6E7A)',
  'linear-gradient(135deg,#4A3060,#9A6AAA)',
  'linear-gradient(135deg,#7A4A62,#C97B94)',
  'linear-gradient(135deg,#B5573F,#D98C3F)',
  'linear-gradient(135deg,#C8956D,#8A6A4A)',
  'linear-gradient(135deg,#C97B94,#5A3F52)',
  'linear-gradient(135deg,#8A9B7E,#5A6E52)',
];
