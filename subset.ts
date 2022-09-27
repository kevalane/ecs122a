let S: Set<number> = new Set<number>([1, 2, 3, 4]);

function getSetOfSubsets(S: Set<number>): Set<Set<number>> {
    let setOfSubsets: Set<Set<number>> = new Set<Set<number>>();
    let numberOfSubsets: number = Math.pow(2, S.size);

    for (let i = 0; i < numberOfSubsets; i++) {
        let subset: Set<number> = new Set<number>();
        let index: number = i;
        for (let k: number = 0; k < S.size; k++) {
            if (index & 0b1) subset.add(k+1);
            index = index >> 1;
        }
        setOfSubsets.add(subset);
    }
    return setOfSubsets;
}

