// Mock data simulating articles fetched from Laravel API
// In production, this would be replaced with actual API calls

export const mockArticles = [
  {
    id: 1,
    title: "How AI Chatbots Are Revolutionizing Customer Support",
    slug: "ai-chatbots-revolutionizing-customer-support",
    excerpt: "Discover how artificial intelligence is transforming the way businesses interact with their customers, providing 24/7 support and personalized experiences.",
    content: `
      <p>In today's fast-paced digital world, customer expectations have never been higher. Businesses are turning to AI-powered chatbots to meet these demands, and the results are remarkable.</p>
      
      <h2>The Rise of Conversational AI</h2>
      <p>Conversational AI has evolved from simple rule-based systems to sophisticated language models capable of understanding context, sentiment, and intent. This evolution has opened new possibilities for customer engagement.</p>
      
      <h2>Key Benefits for Businesses</h2>
      <ul>
        <li><strong>24/7 Availability:</strong> Chatbots never sleep, ensuring customers can get help anytime.</li>
        <li><strong>Instant Responses:</strong> No more waiting in queue for simple queries.</li>
        <li><strong>Scalability:</strong> Handle thousands of conversations simultaneously.</li>
        <li><strong>Cost Efficiency:</strong> Reduce operational costs while improving service quality.</li>
      </ul>
      
      <h2>The Human Touch</h2>
      <p>While AI handles routine queries, human agents can focus on complex issues that require empathy and creative problem-solving. This hybrid approach delivers the best of both worlds.</p>
    `,
    author: "BeyondChats Team",
    publishedAt: "2024-12-15",
    readTime: 5,
    category: "AI & Technology",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
    hasUpdatedVersion: true
  },
  {
    id: 2,
    title: "Building Trust Through Transparent AI Communication",
    slug: "building-trust-transparent-ai-communication",
    excerpt: "Learn why transparency in AI-powered customer interactions is crucial for building lasting customer relationships.",
    content: `
      <p>Trust is the foundation of every successful business relationship. When implementing AI in customer communications, transparency becomes even more critical.</p>
      
      <h2>Why Transparency Matters</h2>
      <p>Customers appreciate knowing when they're interacting with an AI system. Studies show that honest disclosure actually increases trust and satisfaction.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Clearly identify AI-powered interactions</li>
        <li>Provide easy escalation to human agents</li>
        <li>Be upfront about AI capabilities and limitations</li>
        <li>Continuously gather and act on feedback</li>
      </ul>
      
      <h2>The Long-term Benefits</h2>
      <p>Companies that prioritize transparency in their AI implementations see higher customer retention rates and stronger brand loyalty.</p>
    `,
    author: "BeyondChats Team",
    publishedAt: "2024-12-10",
    readTime: 4,
    category: "Customer Experience",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    hasUpdatedVersion: true
  },
  {
    id: 3,
    title: "Integrating Chatbots with Your Existing Tech Stack",
    slug: "integrating-chatbots-existing-tech-stack",
    excerpt: "A practical guide to seamlessly integrating AI chatbots with your CRM, helpdesk, and other business tools.",
    content: `
      <p>Successful chatbot implementation requires seamless integration with your existing tools and workflows. Here's how to make it happen.</p>
      
      <h2>Common Integration Points</h2>
      <ul>
        <li><strong>CRM Systems:</strong> Sync customer data for personalized interactions</li>
        <li><strong>Helpdesk Software:</strong> Create and manage tickets automatically</li>
        <li><strong>E-commerce Platforms:</strong> Access order information and process returns</li>
        <li><strong>Analytics Tools:</strong> Track performance and gather insights</li>
      </ul>
      
      <h2>API-First Approach</h2>
      <p>Modern chatbot platforms offer robust APIs that enable deep integrations. This flexibility ensures your AI assistant can access the data it needs to provide accurate, helpful responses.</p>
      
      <h2>Security Considerations</h2>
      <p>When integrating systems, security should be paramount. Use OAuth 2.0, encrypt data in transit, and regularly audit access permissions.</p>
    `,
    author: "BeyondChats Team",
    publishedAt: "2024-12-05",
    readTime: 6,
    category: "Technical Guides",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    hasUpdatedVersion: false
  },
  {
    id: 4,
    title: "Measuring ROI of Your Customer Support Chatbot",
    slug: "measuring-roi-customer-support-chatbot",
    excerpt: "Key metrics and strategies to effectively measure the return on investment of your AI chatbot implementation.",
    content: `
      <p>Investing in AI chatbots is a significant decision. Understanding how to measure success ensures you can optimize and justify your investment.</p>
      
      <h2>Essential Metrics</h2>
      <ul>
        <li><strong>Resolution Rate:</strong> Percentage of queries resolved without human intervention</li>
        <li><strong>Average Handle Time:</strong> Time from query to resolution</li>
        <li><strong>Customer Satisfaction:</strong> Post-interaction CSAT scores</li>
        <li><strong>Cost Per Interaction:</strong> Total cost divided by number of conversations</li>
      </ul>
      
      <h2>Beyond the Numbers</h2>
      <p>While quantitative metrics are important, don't overlook qualitative benefits like improved employee satisfaction, faster response times, and enhanced brand perception.</p>
      
      <h2>Continuous Improvement</h2>
      <p>Use data to identify areas for improvement. Regularly review conversation logs, update training data, and refine responses based on customer feedback.</p>
    `,
    author: "BeyondChats Team",
    publishedAt: "2024-11-28",
    readTime: 5,
    category: "Business Strategy",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    hasUpdatedVersion: true
  },
  {
    id: 5,
    title: "The Future of Conversational AI: Trends to Watch",
    slug: "future-conversational-ai-trends",
    excerpt: "Explore emerging trends in conversational AI and how they will shape the future of customer engagement.",
    content: `
      <p>The conversational AI landscape is evolving rapidly. Here are the trends that will define the next generation of customer interactions.</p>
      
      <h2>Emerging Trends</h2>
      <ul>
        <li><strong>Multimodal AI:</strong> Combining text, voice, and visual interactions</li>
        <li><strong>Emotional Intelligence:</strong> AI that understands and responds to emotions</li>
        <li><strong>Proactive Engagement:</strong> AI that anticipates customer needs</li>
        <li><strong>Hyper-Personalization:</strong> Tailored experiences for each individual</li>
      </ul>
      
      <h2>The Role of Large Language Models</h2>
      <p>LLMs like GPT-4 are pushing the boundaries of what's possible in conversational AI, enabling more natural, context-aware interactions than ever before.</p>
      
      <h2>Preparing for the Future</h2>
      <p>Organizations that invest in AI infrastructure and talent today will be best positioned to leverage these emerging capabilities tomorrow.</p>
    `,
    author: "BeyondChats Team",
    publishedAt: "2024-11-20",
    readTime: 7,
    category: "Industry Insights",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    hasUpdatedVersion: false
  }
];

// Updated versions of articles (simulating LLM-enhanced content)
export const updatedArticles = [
  {
    id: 101,
    originalId: 1,
    title: "How AI Chatbots Are Revolutionizing Customer Support in 2024",
    slug: "ai-chatbots-revolutionizing-customer-support-updated",
    excerpt: "An enhanced deep-dive into artificial intelligence's transformative impact on customer service, featuring insights from leading industry sources.",
    content: `
      <p>The customer support landscape has undergone a seismic shift with the advent of AI-powered chatbots. In 2024, these intelligent systems are no longer optional—they're essential for competitive businesses.</p>
      
      <h2>The Evolution of Customer Expectations</h2>
      <p>Today's consumers expect instant, accurate, and personalized support. According to recent studies, 73% of customers expect companies to understand their unique needs and expectations. AI chatbots are uniquely positioned to deliver on these demands.</p>
      
      <h2>Advanced Capabilities Driving Adoption</h2>
      <ul>
        <li><strong>Natural Language Understanding:</strong> Modern chatbots comprehend context, slang, and even typos.</li>
        <li><strong>Sentiment Analysis:</strong> Real-time emotion detection enables appropriate response tones.</li>
        <li><strong>Predictive Assistance:</strong> AI anticipates needs before customers even ask.</li>
        <li><strong>Omnichannel Presence:</strong> Seamless support across web, mobile, and social platforms.</li>
      </ul>
      
      <h2>Implementation Success Stories</h2>
      <p>Leading companies report 40-60% reduction in support costs while simultaneously improving customer satisfaction scores. The key lies in thoughtful implementation that balances automation with human touch.</p>
      
      <h2>Looking Ahead</h2>
      <p>As AI technology continues to advance, we can expect even more sophisticated chatbot capabilities, including voice-first interactions, visual recognition, and proactive problem resolution.</p>
      
      <hr />
      <h3>References</h3>
      <ul>
        <li><a href="https://example.com/ai-trends-2024" target="_blank" rel="noopener">AI Trends in Customer Service 2024 - TechReview</a></li>
        <li><a href="https://example.com/chatbot-roi-study" target="_blank" rel="noopener">Chatbot ROI Study - Business Insider</a></li>
      </ul>
    `,
    author: "BeyondChats Team (AI Enhanced)",
    publishedAt: "2024-12-18",
    readTime: 6,
    category: "AI & Technology",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
    isUpdated: true,
    references: [
      { title: "AI Trends in Customer Service 2024", source: "TechReview", url: "https://example.com/ai-trends-2024" },
      { title: "Chatbot ROI Study", source: "Business Insider", url: "https://example.com/chatbot-roi-study" }
    ]
  },
  {
    id: 102,
    originalId: 2,
    title: "Building Customer Trust Through Transparent AI: A Comprehensive Guide",
    slug: "building-trust-transparent-ai-communication-updated",
    excerpt: "Enhanced insights on why transparency in AI-powered customer interactions is crucial for building lasting relationships, backed by industry research.",
    content: `
      <p>In an era where AI is increasingly mediating customer relationships, transparency has emerged as a critical differentiator. Companies that embrace openness about their AI usage are seeing remarkable results in customer trust metrics.</p>
      
      <h2>The Psychology of AI Transparency</h2>
      <p>Research indicates that customers who know they're interacting with an AI system—and understand its capabilities—report higher satisfaction than those left guessing. This counterintuitive finding highlights the importance of clear communication.</p>
      
      <h2>Building a Transparency Framework</h2>
      <ul>
        <li><strong>Clear Identification:</strong> Always disclose AI involvement in interactions</li>
        <li><strong>Capability Boundaries:</strong> Be upfront about what AI can and cannot do</li>
        <li><strong>Data Usage:</strong> Explain how customer data improves the AI experience</li>
        <li><strong>Human Escalation:</strong> Make it easy to reach a person when needed</li>
      </ul>
      
      <h2>Regulatory Landscape</h2>
      <p>With regulations like the EU AI Act, transparency isn't just good practice—it's becoming a legal requirement. Forward-thinking companies are getting ahead of compliance demands.</p>
      
      <h2>Measuring Trust</h2>
      <p>Track metrics like Net Promoter Score (NPS), customer retention rates, and direct feedback to gauge the impact of your transparency initiatives.</p>
      
      <hr />
      <h3>References</h3>
      <ul>
        <li><a href="https://example.com/ai-trust-research" target="_blank" rel="noopener">AI Trust Research 2024 - Harvard Business Review</a></li>
        <li><a href="https://example.com/eu-ai-act-guide" target="_blank" rel="noopener">EU AI Act Compliance Guide - Legal Tech Today</a></li>
      </ul>
    `,
    author: "BeyondChats Team (AI Enhanced)",
    publishedAt: "2024-12-16",
    readTime: 5,
    category: "Customer Experience",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    isUpdated: true,
    references: [
      { title: "AI Trust Research 2024", source: "Harvard Business Review", url: "https://example.com/ai-trust-research" },
      { title: "EU AI Act Compliance Guide", source: "Legal Tech Today", url: "https://example.com/eu-ai-act-guide" }
    ]
  },
  {
    id: 104,
    originalId: 4,
    title: "The Complete Guide to Measuring Chatbot ROI in 2024",
    slug: "measuring-roi-customer-support-chatbot-updated",
    excerpt: "A comprehensive, data-driven approach to measuring and maximizing the return on investment of your AI chatbot implementation.",
    content: `
      <p>In 2024, chatbot investments have matured from experimental projects to core business initiatives. With this shift comes increased scrutiny on demonstrating tangible returns.</p>
      
      <h2>The ROI Framework</h2>
      <p>Effective ROI measurement requires a holistic view that encompasses both direct savings and indirect value creation.</p>
      
      <h2>Direct Cost Savings</h2>
      <ul>
        <li><strong>Agent Time Saved:</strong> Calculate hours freed up multiplied by average agent cost</li>
        <li><strong>Reduced Infrastructure:</strong> Lower telephony and support tool costs</li>
        <li><strong>After-Hours Coverage:</strong> Value of 24/7 support without night shifts</li>
        <li><strong>Training Reduction:</strong> Faster agent onboarding with AI assistance</li>
      </ul>
      
      <h2>Value Creation Metrics</h2>
      <ul>
        <li><strong>Revenue Impact:</strong> Upsells and cross-sells facilitated by chatbots</li>
        <li><strong>Customer Lifetime Value:</strong> Improved retention through better support</li>
        <li><strong>Brand Perception:</strong> Enhanced reputation from responsive service</li>
      </ul>
      
      <h2>Advanced Analytics</h2>
      <p>Leverage conversation analytics to identify optimization opportunities. Machine learning can surface patterns in successful resolutions that can be replicated across interactions.</p>
      
      <hr />
      <h3>References</h3>
      <ul>
        <li><a href="https://example.com/chatbot-benchmarks" target="_blank" rel="noopener">2024 Chatbot Benchmarks Report - Gartner</a></li>
        <li><a href="https://example.com/ai-roi-calculator" target="_blank" rel="noopener">AI ROI Calculator Methodology - Forrester</a></li>
      </ul>
    `,
    author: "BeyondChats Team (AI Enhanced)",
    publishedAt: "2024-12-12",
    readTime: 7,
    category: "Business Strategy",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    isUpdated: true,
    references: [
      { title: "2024 Chatbot Benchmarks Report", source: "Gartner", url: "https://example.com/chatbot-benchmarks" },
      { title: "AI ROI Calculator Methodology", source: "Forrester", url: "https://example.com/ai-roi-calculator" }
    ]
  }
];

// Simulated API functions
export const fetchArticles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockArticles);
    }, 500);
  });
};

export const fetchArticleById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const article = mockArticles.find(a => a.id === parseInt(id));
      if (article) {
        resolve(article);
      } else {
        reject(new Error('Article not found'));
      }
    }, 300);
  });
};

export const fetchUpdatedArticle = (originalId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updated = updatedArticles.find(a => a.originalId === parseInt(originalId));
      resolve(updated || null);
    }, 300);
  });
};

export const fetchAllUpdatedArticles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updatedArticles);
    }, 500);
  });
};
