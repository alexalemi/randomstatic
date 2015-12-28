"""Try to create a generator for cards."""

from itertools import combinations

def gen(k):
    """Generate a set of cards for k images."""
    n = k * (k - 1) + 1

    cards = []
    # First do the first set
    for i in xrange(k):
        start = i*(k-1) + 1
        end = (i+1)*(k-1) + 1
        guys = (0,) + tuple(range(start, end))
        cards.append(guys)

    for block in xrange(1, k):
        for row in xrange(1, k):
            guys = (block,)
            for colblock in xrange(1, k):
                pad = (colblock-1)*(block-1)
                loc = (pad + (row-1)) % (k-1)
                offset = (colblock * (k-1)) + 1
                guys += ( loc + offset , )
            cards.append(guys)

    return cards

def testset(s):
    for a,b in combinations(s, 2):
        if len(frozenset(a).intersection(frozenset(b))) != 1:
            # print a,b
            return False
    return True

if __name__ == "__main__":
    for i in xrange(2,20):
        z = gen(i)
        works = testset(z)

        print len(z), i, works
