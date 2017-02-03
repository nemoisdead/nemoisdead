if [[ $# -lt 1 ]]
then
    echo "Error: Post name is required"
    exit 1
else
    name="_drafts/$1.markdown"
    cp _drafts/templates/post-template.markdown "$name"
    gedit "$name"
fi
