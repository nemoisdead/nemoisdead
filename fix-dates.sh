for post in _posts/*.markdown
do
    if ! grep -Fq 'date: ' "$post"
    then
        date=$(git log --diff-filter=A --pretty='%ad' --date=iso --follow -- "$post")
        sed -i "/title:/a\
            date: $date" "$post"
    fi
done
git add _posts
git fixdates
