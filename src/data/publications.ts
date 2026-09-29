// Verified publication data (2024–2026) harvested from Google Scholar profile
// (user=24pU2eQAAAAJ) and enriched with DOI/venue metadata from Crossref + ACL Anthology,
// Sep 2026. Re-check before reusing later: Scholar lists change as new papers appear.

export type PubType = "journal" | "conference" | "chapter";

export interface Publication {
  year: number;
  type: PubType;
  authors: string; // APA author string, e.g. "Shafik, W., & Hidayatullah, A. F."
  title: string;
  venue: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  publisher?: string;
}

export const publications: Publication[] = [
  {"year": 2026, "type": "journal", "authors": "Shafik, W., Hidayatullah, A. F., Kalinaki, K., Gul, H., Zakari, R. Y., & Tufail, A.", "title": "A systematic literature review on transparency and interpretability of AI models in healthcare: taxonomies, tools, techniques, datasets, open research challenges, and future trends", "venue": "Health and Technology", "volume": "16", "issue": "2", "pages": "209-230", "doi": "10.1007/s12553-025-01051-w"},
  {"year": 2026, "type": "journal", "authors": "Karimi, E., Alfarisy, G. A. F., Nugroho, B., & Hidayatullah, A. F.", "title": "Dom-Tree Based Automatic Classification Of Predatory Journals Using Doc2vec And Automated Machine Learning", "venue": "Innovative Informatics and Artificial Intelligence Research", "volume": "2", "issue": "1", "pages": "30-37"},
  {"year": 2026, "type": "journal", "authors": "Aslam, M. M., Shafik, W., Hidayatullah, A. F., Kalinaki, K., Gul, H., Zakari, R. Y., & Tufail, A.", "title": "Intelligent transportation systems: A critical review of integration of cyber-physical systems (cps) and industry 4.0", "venue": "Digital Communications and Networks", "volume": "12", "issue": "1", "pages": "143-164", "doi": "10.1016/j.dcan.2025.06.014"},
  {"year": 2026, "type": "conference", "authors": "Almheiri, S., Elbouardi, B., Pranida, S. Z., Nikishina, I., B, A. R., Krishnamurthy, P., Airlangga, M. C., Genadi, R. A., Bao, N. P. G., Yari, A. H., Toyin, H. O., Mukhituly, N., Attia, M., Hassan, B., Hidayatullah, A. F., Kuribayashi, T., Li, H., Bhat, S., & Koto, F.", "title": "Multilingual Idioms in Sentences and Conversations Across High-, Medium-, and Low-Resource Languages", "venue": "Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)", "pages": "12363-12389", "doi": "10.18653/v1/2026.acl-long.564"},
  {"year": 2025, "type": "journal", "authors": "Hidayatullah, A. F., Apong, R. A., Lai, D. T. C., & Qazi, A.", "title": "Pre-trained language model for code-mixed text in Indonesian, Javanese, and English using transformer", "venue": "Social Network Analysis and Mining", "volume": "15", "issue": "1", "pages": "Article 30", "doi": "10.1007/s13278-025-01444-9"},
  {"year": 2025, "type": "chapter", "authors": "Hidayatullah, A. F., & Shafik, W.", "title": "Revolutionizing agriculture with automated plant disease detection: techniques, applications, challenges, future directions, and sustainability impacts", "venue": "Artificial Intelligence and Data Science for Sustainability", "pages": "267-296", "doi": "10.4018/979-8-3693-6829-9.ch009", "publisher": "IGI Global Scientific Publishing"},
  {"year": 2025, "type": "conference", "authors": "Hidayatullah, A. F., & Al-Sabahi, A. Y.", "title": "Sentiment Analysis on Indonesian-Javanese-English Code-Mixed Texts via Parameter-Efficient Fine-Tuning and Selective Layer Unfreezing", "venue": "2025 International Conference on Information and Communication Technology (ICoICT)", "pages": "1-6", "doi": "10.1109/icoict66265.2025.11193136"},
  {"year": 2024, "type": "chapter", "authors": "Shafik, W., Hidayatullah, A. F., Kalinaki, K., & Aslam, M. M.", "title": "Artificial Intelligence (AI)-Assisted Computer Vision (CV) in Healthcare Systems", "venue": "Computer Vision and AI-Integrated IoT Technologies in the Medical Ecosystem", "pages": "17-36", "doi": "10.1201/9781003429609-2", "publisher": "CRC Press"},
  {"year": 2024, "type": "conference", "authors": "Hidayatullah, A. F.", "title": "Code-Mixed Sentiment Analysis on Indonesian-Javanese-English Text Using Transformer Models", "venue": "2024 8th International Conference on Information Technology, Information Systems and Electrical Engineering (ICITISEE)", "pages": "340-345", "doi": "10.1109/icitisee63424.2024.10730138"},
  {"year": 2024, "type": "chapter", "authors": "Abubakari, M. S., Shafik, W., & Hidayatullah, A. F.", "title": "Evaluating the Potential of Artificial Intelligence in Islamic Religious Education: A SWOT Analysis Overview", "venue": "AI-Enhanced Teaching Methods", "pages": "216-239", "doi": "10.4018/979-8-3693-2728-9.ch010", "publisher": "IGI Global"},
  {"year": 2024, "type": "conference", "authors": "Haryono, K., & Hidayatullah, A. F.", "title": "Large language model: design mobile platform for problem solving ideation", "venue": "2024 9th International Conference on Information Technology and Digital Applications (ICITDA)", "pages": "1-7", "doi": "10.1109/icitda64560.2024.10809976"},
  {"year": 2024, "type": "chapter", "authors": "Hidayatullah, A. F., Kalinaki, K., Gul, H., Zakari, R. Y., & Shafik, W.", "title": "Leveraging Natural Language Processing for Enhanced Text Analysis in Business Intelligence", "venue": "Intersection of AI and Business Intelligence in Data-Driven Decision-Making", "pages": "151-182", "doi": "10.4018/979-8-3693-5288-5.ch006", "publisher": "IGI Global"},
  {"year": 2024, "type": "journal", "authors": "Iksan, N., Tufail, A., Apong, R. A., & Hidayatullah, A. F.", "title": "Optimizing Maritime Passenger Transfer in Rich Vehicle Routing Problem Using a Hybrid Genetic Algorithm", "venue": "IEEE Access", "volume": "12", "pages": "80153-80164", "doi": "10.1109/access.2024.3406222"},
  {"year": 2024, "type": "conference", "authors": "Hidayatullah, A. F.", "title": "Parameter efficient fine-tuning using low-rank adaptation for emotion classification in indonesian texts", "venue": "2024 9th International Conference on Information Technology and Digital Applications (ICITDA)", "pages": "1-6", "doi": "10.1109/icitda64560.2024.10810037"},
  {"year": 2024, "type": "journal", "authors": "Hidayatullah, A. F., Apong, R. A., Lai, D. T. C., & Qazi, A.", "title": "Word Level Language Identification in Indonesian-Javanese-English Code-Mixed Text", "venue": "Procedia Computer Science", "volume": "244", "pages": "105-112", "doi": "10.1016/j.procs.2024.10.183"},
];