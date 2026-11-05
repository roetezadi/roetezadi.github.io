/*
 * Blog posts.
 *
 * To add a new article, copy one of the objects below and change:
 *   id      - a unique short name used in the URL (letters, numbers, dashes only)
 *   title   - the article title (this is what the search looks at)
 *   date    - the publication date, in YYYY-MM-DD format
 *   summary - one or two sentences shown in the article list
 *   content - the body of the article, written in HTML (<p>, <h3>, <ul>, <a>, <img>, ...)
 *
 * Posts are shown newest first, sorted by date automatically.
 */
const POSTS = [
    {
        id: "nlp-research-trends",
        title: "The Shifting Landscape of NLP Research (Part 1): Publication Growth",
        date: "2026-10-15",
        summary: "A look at how many papers the NLP community has published over the years.",
        content: `
            <p>
                The longer I've worked in NLP, the more I'm struck by how quickly the field is changing.
                About a decade ago, it was entirely feasible to skim the abstracts of every accepted paper at a top conference like ACL. Today, the sheer volume of accepted work has made that task practically impossible to keep up with at a human pace! 
                So I decided to look at how many papers have been accepted at top NLP conferences over the last five years, and how the dominant research topics have shifted.
            </p>
            <h3>How Many Papers Are We Talking About?</h3>
            <p>
                For this analysis, I focused on the years 2020 through 2025. 
                The data comes from the <a href="https://github.com/acl-org/acl-anthology/tree/master" target="_blank">ACL Anthology's GitHub repository</a> or their official website, where accepted papers are stored along with their titles and abstracts — which is what I'll be referencing throughout.
            </p>
            <p>
                Figure 1. breaks down the number of papers accepted at five major NLP conferences (ACL, COLING, EACL, EMNLP, and NAACL) counting both oral presentations and poster acceptances, for years in which the conference was held.            </p>
            <figure>
                <img src="articles-figs/nlp-research-trends/NLP-conferences-trends.png" alt="Diagram of">
                <figcaption>Figure 1. Number of accepted papers for ACL, COLING, EACL, EMNLP, and NAACL conferences.</figcaption>
            </figure>
            <p>
                ACL, the top NLP conference, has gone from 780 to nearly 1,700 accepted papers, an 110% increase within only five years that speaks to the growing volume of quality work in the field. 
                EMNLP follows the same pattern, growing from 750 to almost 2,100 accepted papers.
                And that's just the accepted papers, when you think about how many more must have been submitted just to go through review, the numbers become even more enormous.
                COLING, EACL, and NAACL, on the other hand, didn't follow the same pattern. It's hard to say exactly why, it could be down to each conference's own policies, or it may simply be that authors are increasingly directing their work toward ACL, EMNLP, and other conferences instead.
                To broaden the scope, I also looked beyond NLP-specific venues, examining trends at the top ML and AI conferences: ICML, NeurIPS, and ICLR, with the results presented in Figure 2.
                </p>

            <figure>
                <img src="articles-figs/nlp-research-trends/ML-conf-trends.png" alt="Diagram of">
                <figcaption>Figure 2. Accepted paper counts across ICLR, ICML, and NeurIPS, compared against the subset of NLP-focused work within each conference.</figcaption>
            </figure>

            <p>
                As you can see, the same pattern holds, accepted paper counts have been climbing year over year, much like ACL and EMNLP. 
                NeurIPS stands out the most, growing from roughly 1,800 accepted papers to over 5,500, by far the largest jump of any conference in this analysis!
                ICML and ICLR show a similar jump, both climbing toward nearly 3,500 papers. 
                That said, it's important to remember that these conferences cover all areas of AI, not just NLP.
                So I've decieded to include a breakdown of how many of those accepted papers are specifically NLP-related.
                One interesting thing to notice is that the number of NLP papers within these conferences has been growing too (green bars represent).
                NLP papers went from making up around 5-15% of accepted work to nearly 27-30% — and what's particularly interesting is that this jump became most noticeable from 2023 onward.
                So why 2023 specifically? Well, that's right around the time Large Language Models (LLMs) emerged. I'm not trying to draw any hard conclusions here, and correlation doesn't always mean causation — but at the same time, it would be hard to argue that LLMs had nothing to do with this spike.
                The rise of LLMs brought with it a wave of new research directions in NLP, which likely explains this uptick.
            </p>
            <p>
                For NLP researchers tracking a single year — say 2025 — the volume of literature is staggering: roughly 9,000 papers published across just 7 major conferences alone!
                Of course, most researchers don't need to monitor every corner of NLP, focusing on one or two core areas of interest is a natural and practical strategy. 
                But this raises an important question: are these subfields truly isolated from one another? 
                If the field is more interconnected than it appears, can you really afford to look at only one small slice of it?
            </p>
        `
    }
    // ,
    // {
    //     id: "llm-change-impact-analysis",
    //     title: "The Shifting Landscape of NLP Research (Part 2): Topic Trends",
    //     date: "2026-10-15",
    //     summary: "A look at how the NLP community research topics have shifted over the years.",
    //     content: `
    //         <p>
    //             To Be filled.
    //         </p>
    //     `
    // }
];
