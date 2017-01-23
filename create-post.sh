if [[ $# -lt 1 ]]
then
    echo "Error: Post name is required"
    exit 1
else
    name="_posts/$(date -I)-$1.markdown"
    cp _drafts/post-template.markdown "$name"
    gedit "$name"
fi
