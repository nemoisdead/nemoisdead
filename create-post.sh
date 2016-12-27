if [[ $# -lt 1 ]]
then
    echo "Error: Post name is required"
    exit 1
else
    cp templates/post.markdown "_posts/$(date -I)-$1.markdown"
fi
