interface words {
    text: string,
    start: number,
    end: number,
    speaker: string
}

interface highlights {
    count: number,
    rank: number,
    text: string
}

interface auto_highlight {
    status: string,
    results: [highlights]
}

interface summary_info {
    [key: string]: number;
 }

interface label {
    relevance: number,
    label: string
}

interface contentlabel {
    label: string,
    confidence: number,
    severity: number
}

interface iab_category {
    status: string,
    summary: [summary_info]
    results: [{
        text: string,
        labels: [label]
    }]
}

interface content_safety_labels {
    status: string,
    summary: [summary_info]
    results: [{
        text: string,
        labels: [contentlabel]
    }]
}

export interface TranscriptDetails {
    
    id: string,
    text: string,
    summary: string,
    works: [words],
    auto_highlights_result: auto_highlight
    iab_categories_result: iab_category
    content_safety_labels: content_safety_labels

}